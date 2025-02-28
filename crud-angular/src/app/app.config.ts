import { type ApplicationConfig, importProvidersFrom } from "@angular/core"
import { provideRouter } from "@angular/router"
import { routes } from "./app.routes"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { provideHttpClient } from "@angular/common/http"
import { ConfirmationService, MessageService } from "primeng/api"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
    MessageService,
    ConfirmationService,
  ],
}

