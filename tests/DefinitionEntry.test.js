import { render } from '@testing-library/svelte'
import Scenario1 from './DefinitionEntryScenario1.svelte';
import { describe, expect, test } from 'vitest'

describe('DefinitionEntry.svelte', () => {
  test('renders a link with the given href', async () => {
    const { getByTestId } = render(Scenario1);
    expect(getByTestId('definition-entry')).toHaveClass('bg-gray-50');
    expect(getByTestId('dt')).toHaveTextContent("I'm the description term");
    expect(getByTestId('dd')).toHaveTextContent("I'm the description definition");
  });
});