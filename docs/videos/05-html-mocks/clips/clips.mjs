// Screen recording for episode 05: a tour of the Selah mocks, served from the reference
// repo's docs folder:  node tools/serve-static.mjs C:/projects/selah/docs 4173
// Paced to the "A tour" paragraph of script.md (about 49 s): gallery, notes page,
// theme toggle, delete dialog, undo toast.
export const config = { baseURL: 'http://localhost:4173', viewport: { width: 1408, height: 792 } };

export const clips = {
  async 'mocks-tour'(t) {
    // The gallery lists every screen with a live preview and state chips (~7 s).
    await t.go('/mocks/index.html');
    await t.wait(2200);
    await t.scroll(500, 2200);
    await t.wait(1600);
    // The notes page in its default state: sidebar, note list, editor (~13 s).
    await t.click(t.page.locator('a[href="pages/notes/default.html"]'));
    await t.page.waitForLoadState('networkidle');
    await t.wait(5200);
    await t.hover(t.page.locator('aside, nav').first(), 1800);
    await t.hover(t.page.locator('main').first(), 2200);
    // The state bar at the bottom, then `t` flips light and dark (~11 s).
    await t.scroll(200, 1200);
    await t.wait(1800);
    await t.page.keyboard.press('t');
    await t.wait(3200);
    await t.page.keyboard.press('t');
    await t.wait(2600);
    // The delete dialog names the note and starts with focus on Cancel (~7 s).
    await t.go('/mocks/dialogs/delete-note/default.html');
    await t.wait(6200);
    // The toast with an action: eight seconds to undo (~6 s).
    await t.go('/mocks/notifications/toast/with-action.html');
    await t.wait(5200);
  },
};
