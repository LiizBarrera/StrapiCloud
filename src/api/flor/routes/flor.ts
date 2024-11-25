/**
 * flor router
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::flor.flor', {
  config: {
    delete: {
      policies: [], // Puedes agregar políticas aquí si es necesario
      middlewares: [], // Puedes agregar middlewares personalizados aquí si es necesario
    },
  },
});
