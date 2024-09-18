import puppeteer from "puppeteer";
import { z } from "zod";

import { procedure, router } from "../trpc";

export const appRouter = router({
  screenshot: procedure
    .input(
      z.object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({ width: input.width, height: input.height });
      await page.goto(input.url, { waitUntil: "networkidle0" });
      const screenshot = await page.screenshot({
        type: "png",
        encoding: "base64",
      });
      return screenshot;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
