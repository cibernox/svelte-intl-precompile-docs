import { cleanup, render } from '@testing-library/svelte'
import Scenario1 from './DefinitionEntryScenario1.svelte';

describe('DefinitionEntry.svelte', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('renders a link with the given href', async () => {
    const { getByTestId } = render(Scenario1);
    expect(getByTestId('definition-entry')).to.have.class('bg-gray-50');
    expect(getByTestId('dt')).to.have.text("I'm the description term");
    expect(getByTestId('dd')).to.have.text("I'm the description definition");
  });
});