# `@swaggyplin/component-library`

A reusable React component library built with TypeScript and `styled-components`.

This package provides a small set of UI building blocks for application interfaces, including buttons, cards, form controls, data display components, and hero media sections. It is designed to be lightweight, easy to adopt, and simple to customize through props.

## Highlights

- Built with React and TypeScript
- Published as an npm package with type declarations
- Powered by `styled-components`
- Documented and previewed with Storybook
- Includes unit tests for component behavior

## Installation

Install the package:

```bash
npm install @swaggyplin/component-library
```

Install peer dependencies if they are not already present in your project:

```bash
npm install react react-dom styled-components
```

## Quick Start

```tsx
import {
  Button,
  Card,
  Dropdown,
  HeroImage,
  Label,
  Text,
} from "@swaggyplin/component-library";

const options = [
  { name: "Design", value: "design" },
  { name: "Engineering", value: "engineering" },
];

export function Demo() {
  return (
    <div style={{ display: "grid", gap: 16, maxWidth: 640 }}>
      <HeroImage
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        title="Component Library"
        subtitle="Reusable building blocks for React applications"
      />

      <Card title="Get Started">
        <div style={{ display: "grid", gap: 12 }}>
          <Label color="#2563eb">Choose a team</Label>
          <Dropdown
            options={options}
            onOpen={() => {}}
            onChange={(value) => console.log(value)}
          />
          <Text color="#374151">Ready to plug into your next project.</Text>
          <Button background="#2563eb">Continue</Button>
        </div>
      </Card>
    </div>
  );
}
```

## Exported Components

The library currently exports the following components:

| Component     | Purpose                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `Button`      | Action trigger with configurable size, shape, background, and plain style   |
| `Card`        | Content container with title, width, padding, and border customization      |
| `Dropdown`    | Basic dropdown selector with configurable label and value keys              |
| `HeroImage`   | Full-width hero media block with optional overlay text                      |
| `Image`       | Image component with optional border and rounded corners                    |
| `Label`       | Lightweight text label with color and size control                          |
| `RadioButton` | Styled radio input with label, checked state, and disabled state            |
| `Table`       | Tabular data display with configurable columns, widths, and optional footer |
| `Text`        | Inline text primitive with size, weight, and color options                  |

## API Overview

### `Button`

Key props:

- `size`: `"xs" | "sm" | "md" | "lg"`
- `rounded`: `"rounded-sm" | "rounded-md" | "rounded-lg"`
- `plain`: `boolean`
- `disabled`: `boolean`
- `background`: `string`

### `Card`

Key props:

- `title`: `string`
- `width`: `number | string`
- `padding`: `number`
- `background`: `string`
- `borderColor`: `string`

### `Dropdown`

Key props:

- `options`: `Array<any>`
- `onChange`: `(value: string) => void`
- `onOpen`: `() => void`
- `labelKey`: `string`
- `valueKey`: `string`
- `disabled`: `boolean`
- `color`: `string`

### `HeroImage`

Key props:

- `src`: `string`
- `alt`: `string`
- `title`: `string`
- `subtitle`: `string`
- `height`: `number | string`
- `overlay`: `boolean`

### `Image`

Key props:

- `src`: `string`
- `width`: `number | string`
- `height`: `number | string`
- `border`: `boolean`
- `borderColor`: `string`
- `round`: `boolean`

### `Label`

Key props:

- `size`: `"xs" | "sm" | "md" | "lg"`
- `color`: `string`
- `disabled`: `boolean`

### `RadioButton`

Key props:

- `label`: `string`
- `checked`: `boolean`
- `disabled`: `boolean`
- `color`: `string`

### `Table`

Key props:

- `columns`: `Array<{ id: string; displayName: string; width?: number; span?: number }>`
- `data`: `Array<Record<string, string>>`
- `border`: `number`
- `color`: `string`
- `background`: `string`

### `Text`

Key props:

- `size`: `"xs" | "sm" | "md" | "lg"`
- `bold`: `boolean`
- `color`: `string`

## Development

Install dependencies:

```bash
npm install
```

Start Storybook for local component development:

```bash
npm run storybook
```

Build the distributable package:

```bash
npm run build
```

Run tests once in CI mode:

```bash
$env:CI='true'; npm test -- --watchAll=false
```

Run linting:

```bash
npm run lint
```

Check formatting:

```bash
npm run format:check
```

## Packaging

Preview the npm package contents before publishing:

```bash
npm pack --dry-run
```

Create a local tarball for testing in another project:

```bash
npm pack
```

## Publishing

This package is configured for public npm publishing.

Publish a new version with:

```bash
npm publish --access public
```

If your npm account or scope changes, update the `name` field in `package.json` before publishing.

## Tech Stack

- React 19
- TypeScript
- styled-components
- Storybook
- Jest
- Testing Library
- tsup

## Repository Notes

- Source code lives in `src/components`
- The package entry point is `src/index.ts`
- Build output is generated into `dist`

## License

Add your preferred license here before publishing broadly.
