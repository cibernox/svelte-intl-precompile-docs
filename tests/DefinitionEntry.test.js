import { cleanup, render } from '@testing-library/svelte'
import { svelte } from 'vite-plugin-svelte-inline-components';

describe('DefinitionEntry.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', async () => {
    const { getByTestId } = render(await svelte`
      <script>import DefinitionEntry from '$lib/DefinitionEntry.svelte';</script>
      <DefinitionEntry background="gray">
        <svelte:fragment slot="dt">I'm the description term</svelte:fragment>
        <svelte:fragment slot="dd">I'm the description definition</svelte:fragment>    
      </DefinitionEntry>
    `);
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
    expect(getByTestId('dt')).to.have.text("I'm the description term");
    expect(getByTestId('dd')).to.have.text("I'm the description definition");
  });
});