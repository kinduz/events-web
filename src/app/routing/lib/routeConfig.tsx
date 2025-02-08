import { RouteObject } from 'react-router-dom';
import { RoutePaths } from './routePaths';
import {
  AboutPageLazy,
  EventsIdPageLazy,
  EventsPageLazy,
  MainPageLazy,
  NotFoundPageLazy,
} from '@/pages';

export const routeConfig: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
  {
    path: RoutePaths.about,
    element: <AboutPageLazy />,
  },
  {
    path: RoutePaths.notFound,
    element: <NotFoundPageLazy />,
  },

  {
    path: RoutePaths.events,
    element: <EventsPageLazy />,
  },
  {
    path: RoutePaths['events-id'],
    element: <EventsIdPageLazy />,
  },
];
