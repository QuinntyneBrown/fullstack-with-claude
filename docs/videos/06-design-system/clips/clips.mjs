// Screen recording for episode 06: a tour of the Selah design system, served from the
// reference repo's docs folder:  node tools/serve-static.mjs C:/projects/selah/docs 4173
export const config = { baseURL: 'http://localhost:4173', viewport: { width: 1408, height: 792 } };

export const clips = {
  async 'design-system-tour'(t) {
    await t.go('/design-system/index.html');
    await t.wait(1400);
    await t.scroll(600, 1400);
    await t.wait(600);
    await t.go('/design-system/components/button.html');
    await t.wait(1400);
    await t.scroll(900, 2200);
    await t.wait(800);
    await t.go('/design-system/foundations/color.html');
    await t.wait(1400);
    await t.scroll(700, 1800);
    await t.wait(800);
  },
};
