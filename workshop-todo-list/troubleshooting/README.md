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

✅ solution

In Angular Standalone components, you need to import the component into the `imports` array of the component where you are trying to use it.

🗎 src/app/app.component.ts (or whichever component is the parent)
```typescript
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    InputButtonUnitComponent // <= import it here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
```
