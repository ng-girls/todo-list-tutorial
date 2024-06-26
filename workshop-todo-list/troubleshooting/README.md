# Troubleshooting

## Error: <component> "is not a known element"
🖥️ sample error message:
```
Template parse errors: 
‘app-input-button-unit' is not a known element:

1. If ‘app-input-button-unit' is an Angular 
component, then verify that it is part of this
module.

2. If ‘app-input-button-unit' is a Web
Component then add 'CUSTOM_ELEMENTS_SCHEMA' to
the '@NgModule.schemas' of this component to
suppress this message. ("

</h1>

[ERROR ->]<app-input-button-unit></app-input-
button-unit>
```
✅ solution

In older versions of Angular you need to put your components in that case to the declerations of angular module.

🗎 app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,  // <= here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
