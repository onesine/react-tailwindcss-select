<h1 align="center" style="border-bottom: 0 white">
    📦 React tailwindcss select
</h1>

<p align="center">
    React-tailwindcss-select is a simple component ready to be inserted into your project <br> This component inspired by <a href="https://react-select.com">React-select</a> is a select input made with <a href="https://tailwindcss.com/">Tailwindcss</a> and <a href="https://reactjs.com">React</a>.
</p>

<p align="center">
    <a href="https://github.com/onesine/react-tailwindcss-select/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/react-tailwindcss-select.svg" alt="MIT License">
    </a>
    <a href="https://www.npmjs.com/package/react-tailwindcss-select">
        <img src="https://img.shields.io/npm/v/react-tailwindcss-select.svg">
    </a>
    <a href="https://github.com/yarnpkg/berry">
        <img src="https://img.shields.io/badge/developed%20with-Yarn%202-blue">
    </a>
</p>

## Features

-   ✅ Select field for a single item
-   ✅ Selection field for multiple items
-   ✅ Optional button to clear the field
-   ✅ Optional search for an item
-   ✅ Optional deactivation of an option
-   ✅ TypeScript support
-   ✅ Group options
-   ⬜ Customization of the select field style
-   ⬜ Fixed Options (multiple items select)

## Why ❔

A select with the above features is above all indispensable in many projects. On a project using
tailwindcss, when I install [react-select](https://react-select.com) or other such packages, the
style of the latter is affected by that of [tailwind](https://tailwindcss.com/).

Rather than looking for a component that uses [tailwind](https://tailwindcss.com/), I preferred to
make my own based on react-select which I like (and also because I generally like to reinvent the
wheel 😅).

<p align="center">
    <img src="https://raw.githubusercontent.com/onesine/react-tailwindcss-select/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09.png" alt="preview react-tailwindcss-select">
</p>

## Online Demo

You can find the online demo at [here](https://demo-react-tailwindcss-select.vercel.app/)

## Install

You can use yarn

```bash
yarn add react-tailwindcss-select
```

Or via npm

```bash
npm install react-tailwindcss-select
```

make sure you have installed the peer dependencies as well with the below versions.

```
"react": "^18.2.0"
```

## Usage

This component also exports a tiny CSS file built by tailwind. All CSS classes used in designing and
customizing the select component are all custom tailwind classes which ensures that an existing
tailwind project would not need to include this CSS file again.

### Tailwind Project

A tailwind project would only have to import the react component using
`import Select from 'react-tailwindcss-select'` and specify the component in the tailwind
configuration to generate the styles of the classes used by react-tailwindcss-select.

Use this code to add the component to the tailwind configuration

```javascript
// in your tailwind.config.js
module.exports = {
    // ...
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js"
    ]
    // ...
};
```

### None Tailwind Project

On a project that does not use tailwind, you need to import the component's CSS as well. To do this
use these two codes: `import Select from 'react-tailwindcss-select'` and
`import 'react-tailwindcss-select/dist/index.css'`

> **Warning**
>
> In this case when you don't use tailwind on your project, think about isolating the component and
> its style so that tailwind doesn't affect the style of the elements in your project. For this, you
> can use the
> [shadow dom](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

Then use react-tailwindcss-select in your app:

#### With React Component

```javascript
import React from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { animal: null };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("value:", value);
        this.setState({ animal: value });
    }

    render() {
        const { animal } = this.state;

        return (
            <Select
                value={animal}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}
```

#### With React Hooks

```javascript
import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const App = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <Select
            value={animal}
            onChange={handleChange}
            options={options}
        />
    );
};

export default App;
```

## Theming options

**Supported themes**
![Theme supported](https://raw.githubusercontent.com/onesine/react-tailwindcss-datepicker/master/assets/img/Screen_Shot_2022-08-04_at_17.04.09_theme.png?raw=true)

To change the default theme, simply add the `primaryColor` props to your select field with the theme
value. By default, the `primaryColor` is set to `blue`

### Indigo example

```javascript
import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const App = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <Select 
            primaryColor={"indigo"} 
            value={animal} 
            onChange={handleChange} 
            options={options} 
        />
    );
};

export default App;
```

## Props

This table shows all the options available in react-tailwindcss-select.

| Option                                    | Type       | Default            | Description                                                                      |
|-------------------------------------------|------------|--------------------|----------------------------------------------------------------------------------|
| [`classNames`](#classNames)               | `Object`   | `undefined`        | This prop allows you to style most of the components used by this library.       |
| `isClearable`                             | `Boolean`  | `true`             | Indicates if you can empty the select field.                                     |
| `isDisabled`                              | `Boolean`  | `false`            | Indicates if you can disable the select field.                                   |
| `isMultiple`                              | `Boolean`  | `false`            | Indicates if you can do a multiple selection.                                    |
| `isSearchable`                            | `Boolean`  | `true`             | Indicates if you can search the elements of the select field.                    |
| `isSearchable`                            | `Boolean`  | `true`             | Indicates if you can search the elements of the select field.                    |
| [`formatGroupLabel`](#formatGroupLabel)   | `Function` | `null`             | Allows you to use a custom rendering template for each subgroup title            |
| [`formatOptionLabel`](#formatOptionLabel) | `Function` | `null`             | Allows you to use a custom rendering template for each option in the list        |
| `loading`                                 | `Boolean`  | `false`            | Indicates if you want a loader to appear in the field.                           |
| `menuIsOpen`                              | `Boolean`  | `false`            | Indicates if you want the options menu to be displayed by default.               |
| `noOptionsMessage`                        | `String`   | `No results found` | Default message when there is no option in the select field.                     |
| [`onChange`](#onChange)                   | `Function` |                    | This callback, if present, is triggered when the select field value is modified. |
| [`options`](#options)                     | `Array`    | `[]`               | All options or options groups available in the selection field.                  |
| `placeholder`                             | `String`   | `Select...`        | The placeholder shown for the select field.                                      |
| `primaryColor`                            | `String`   | `blue`             | Default theme of the field.                                                      |
| `searchInputPlaceholder`                  | `String`   | `Search...`        | The placeholder shown for the search input field.                                |
| [`value`](#value)                         | `Object`   | `null`             | Current value of select field.                                                   |

### onChange

This callback, if present, is triggered when the select field value is modified. This callback takes
as a parameter the current value(s) selected. These values respect the same structure as the
elements of the options.

```js
currentValue => {
    console.log("currentValue:", currentValue);
};
```

### options

All options are available in the select field. Each option element must have a `value` property that
serves as an identifier for the element, a `label` property that is the text that is displayed in
the options list, and an optional `disabled` property to specify whether the element is active.

```js
// default element
const options = [{ value: "fox", label: "🦊 Fox" }];
// default element with `disabled`
const options = [{ value: "fox", label: "🦊 Fox", disabled: true }];
```

#### Group item

If you want to group options you can use the following code.

```js
const options = [
    {
        label: "Mammal",
        options: [
            { value: "Dolphin", labe: "🐬 Dolphin" },
            { value: "Giraffe", labe: "🦒 Giraffe" }
        ]
    },
    {
        label: "Carnivore",
        options: [
            { value: "Tiger", labe: "🐅 Tiger" },
            { value: "Lion", labe: "🦁 Lion" }
        ]
    },
    // 👉 You can put the grouped and ungrouped options together
    { value: "Zombie", labe: "🧟 Zombie" }
];
```

> **Info**
>
> 👉 You can put the grouped and ungrouped options together.

### value

The current value of the select field. These objects must follow the same structure as an `options`
element. Thus, the following would work:

```js
// default element Simple Select
const value = { value: "fox", label: "🦊 Fox" };
// default element with `disabled` Simple Select
const value = { value: "fox", label: "🦊 Fox", disabled: true };
// default element Multiple Select
const value = [{ value: "fox", label: "🦊 Fox" }];
// default element with `disabled` Multiple Select
const value = [{ value: "fox", label: "🦊 Fox", disabled: true }];
```

### formatGroupLabel

`formatGroupLabel` allows you to use a custom rendering template for each subgroup title <br />

```jsx
import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    {
        label: "Mammal",
        options: [
            { value: "Dolphin", labe: "🐬 Dolphin" },
            { value: "Giraffe", labe: "🦒 Giraffe" }
        ]
    },
    {
        label: "Carnivore",
        options: [
            { value: "Tiger", labe: "🐅 Tiger" },
            { value: "Lion", labe: "🦁 Lion" }
        ]
    }
];

const App = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <Select
            value={animal}
            onChange={handleChange}
            options={options}
            isMultiple={true}
            formatGroupLabel={data => (
                <div className={`py-2 text-xs flex items-center justify-between`}>
                    // 👉 data represents each subgroup
                    <span className="font-bold">{data.label}</span>
                    <span className="bg-gray-200 h-5 h-5 p-1.5 flex items-center justify-center rounded-full">
                        {data.options.length}
                    </span>
                </div>
            )}
        />
    );
};

export default App;
```

> **Info**
>
> 👉 data represents each subgroup.

### formatOptionLabel

`formatOptionLabel` allows you to use a custom rendering template for each option in the list.
<br />

```jsx
import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const App = () => {
    const [animal, setAnimal] = useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return (
        <Select
            value={animal}
            onChange={handleChange}
            options={options}
            formatOptionLabel={data => (
                <li
                    className={`block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        !data.isSelected
                            ? `text-white bg-blue-500`
                            : `text-gray-500 bg-blue-100 text-blue-500`
                    }`}
                >
                    // data represents each option in the list
                    {data.label}
                </li>
            )}
        />
    );
};

export default App;
```

> **Info**
>
> 👉 data represents each option in the list.

### classNames

As of version 1.6.0 of `react-tailwindcss-select` you can now use the `classNames` prop for styling.

> **Info**
>
> 👉 Note: this is not to be confused with the className prop, which will add a class to the component.

`classNames` takes an object with keys to represent the various inner components that `react-tailwindcss-select` is made up of. 

Each key takes a callback function or a string. If a key is not filled in, the default classes of the component will be used.

#### All keys

```typescript
interface SelectProps {
    // ....
    classNames?: {
        menuButton?: ({ isDisabled }: { isDisabled: boolean }) => string;
        menu?: string;
        tagItem?: ({ isDisabled }: { isDisabled: boolean }) => string;
        tagItemText?: string;
        tagItemIconContainer?: string;
        tagItemIcon?: string;
        list?: string;
        listGroupLabel?: string;
        listItem?: ({ isSelected }: { isSelected: boolean }) => string;
        listDisabledItem?: string;
        ChevronIcon?: ({ open }: { open: boolean }) => string;
        searchContainer?: string;
        searchBox?: string;
        searchIcon?: string;
        closeIcon?: string;
    };
    // ...
}
```

#### Example of a custom style

```javascript
import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const App = () => {
    const[animal, setAnimal] =useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return(
        <Select
            value={animal}
            onChange={handleChange}
            options={options}
            classNames={{
                menuButton: ({ isDisabled }) => (
                    `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                        isDisabled
                            ? "bg-gray-200"
                            : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                    }`
                ),
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                            ? `text-white bg-blue-500`
                            : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                )
            }}
        />
    );
};

export default App;
```

## Contributing

Got ideas on how to make this better? Open an issue!

## Thanks

This component is inspired by the excellent [react-select](https://react-select.com/) library by Jed
Watson.

I thank you in advance for your contribution to this project.

## License

MIT Licensed. Copyright (c) Lewhe Onesine 2022.
