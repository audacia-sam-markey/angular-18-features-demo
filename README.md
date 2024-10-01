# Input signals

**⚠️ DEVELOPER PREVIEW**

Signal inputs are `read-only` signals unlike the old `@Input` syntax. As with signals declared via signal(),
you access the current value of the input by calling the input signal.

# Modal signals

**⚠️ DEVELOPER PREVIEW**
Modal Signals are similar to Input signals but there are a few differences:

1. Modal Inputs have ⬇️⬆️ `two way binding`. This means that it will automatically output back its latest value to the parent 🔥
2. It is a `WritableSignal` which means it can be edited anywhere!!
3. Use model inputs in components that exist to modify a value based on user interaction. Custom form controls, such as a date picker or combobox, should use model inputs for their primary value.

# Signal Queries

**⚠️ DEVELOPER PREVIEW**

Signal queries all use `viewChild`, `viewChildren`, `contentChild` and `contentChildren`.abs

There are many benefits to this such as:

- More predictable timing. You can access query results as soon as they're available.
- Simpler API surface. All queries return a signal, and queries with more than one result let you work with a standard array.
- Improved type safety. Fewer query use cases include undefined in the possible results.
- More accurate type inference. TypeScript can infer more accurate types when you use a type predicate or when you specify an explicit read option.
- Lazier updates. - Angular updates signal-based query results lazily; the framework does no work unless your code explicitly reads the query results.

# control flow

**@for**

- track - The @for block requires a track expression
  if data is static use `$index` otherwise you should be using a `unique identifier` so @for can track changes properly e.i. a uuid / id

# defer

**⚠️ CAN ONLY WORK WITH STANDALONE COMPONENTS**

`@defer` is an Angular template syntax, that allows you to load parts of a template only when they are needed, given a logical condition.

## Use cases

- The @defer syntax allows us to implement common use cases such as:

- only load a large component after the user scrolls down the page after a certain point
- only load a large component after the user clicks on a button
- preload a large component on the background while the user is reading the page, so that it is ready by the time the user clicks on a button

## How can we use it?

There are two ways you can defer load

1. We can control when the code gets fetched from the backend, this is called `prefetching`

1. We can also control separately when that code is applied to the page/dom

## Companion blocks

- `@placeholder` - This will be in place while the @defer is getting the bundle the data and it is waiting for the component to be rendered to the DOM.abs
- `@loading` - The @loading block is used to show some content while the @defer block is still loading its Javascript bundle in the background.
**What is the difference?**
The difference between @placeholder and @loading
The two blocks seem similar, but they serve different purposes.

  - Params
    - `minimum` is used to specify the minimum amount of time that the @loading block will be shown to the user.

    - `after` is used to specify the amount of time we should wait before showing the @loading indicator after the loading process is started.

The @placeholder is displayed initially until the contents of the @defer block are ready to be rendered.

This block is displayed even before the bundle loading starts. Remember, maybe the loading is triggered only after the user clicks on a button.

So until the bundle loading gets triggered, we might want to display some content to the user and that is where @placeholder comes in.

The @loading block on the other hand only displays when the loading of the bundle of the @defer block has started, and is still ongoing.

After the loading is completed, it disappears.

- `@error` - The @error block is used to display content when the loading of the @defer block fails for some reason.

## How do @defer triggers work?

 - the optional prefetch trigger, which controls when the bundle gets loaded from the backend

 - the optional @defer trigger, which controls when the @defer block gets displayed to the user

The keyword `on` is used for predefined triggers, while the keyword `when` is used for custom triggers.


References/Creditation:

https://blog.angular-university.io/angular-defer/ 

https://angular.dev/overview
