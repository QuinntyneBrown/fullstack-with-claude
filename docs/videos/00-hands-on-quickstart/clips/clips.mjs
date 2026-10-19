// Screen recording for episode 00: a click-around of the running app, a few seconds each of
// the list, search, a new note and a tag. The mock and design-system tours are copies of the
// episode 05 and 06 clips. Start the app first, from the Selah repo:
//   SELAH_DEMO_EMAIL=naomi@example.com SELAH_DEMO_PASSWORD=demo-pass-12345 SELAH_TEST_HARNESS=1 npx next dev -p 3100
export const config = { baseURL: 'http://localhost:3100', viewport: { width: 1408, height: 792 } };

export const setup = {
  // Off camera: start a session for the demo account through the test harness.
  async 'app-tour'(t) {
    await t.page.request.post('http://localhost:3100/api/harness/sign-in', { data: { email: 'naomi@example.com' }, headers: { origin: 'http://localhost:3100' } });
  },
};

export const clips = {
  async 'app-tour'(t) {
    const p = t.page;
    await t.go('/notes');
    await t.wait(2600);
    // Open a note from the list.
    await t.click(p.getByRole('link', { name: /Garden plan for spring/ }).first());
    await t.wait(2600);
    // Search narrows the list and highlights the match.
    const search = p.getByRole('searchbox', { name: 'Search notes' }).first();
    await t.click(search);
    await t.type(search, 'sourdough');
    await t.wait(2600);
    await p.keyboard.press('Escape');
    await t.wait(1400);
    // A new note: type a title and text; autosave shows Saved.
    await t.click(p.getByRole('button', { name: /^New note/ }).first());
    await t.type(p.getByRole('textbox', { name: 'Title' }), 'My first note');
    await t.type(p.getByRole('textbox', { name: 'Note text' }), 'Built step by step with Claude Code.');
    await t.wait(2600);
    // Tag it.
    await t.click(p.getByRole('button', { name: /^Add tag/ }));
    await t.type(p.getByRole('combobox', { name: 'Tag name' }), 'starter');
    await t.wait(900);
    await p.keyboard.press('Enter');
    await t.wait(2600);
  },
};
