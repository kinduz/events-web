/* eslint-disable no-unused-vars */

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',

  EVENTS = 'events',
  EVENTS_ID = 'events-id'
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/*',
  [AppRoutes.MAIN]: '/',

  [AppRoutes.EVENTS]: '/events',
  [AppRoutes.EVENTS_ID]: '/events/:id',
};
