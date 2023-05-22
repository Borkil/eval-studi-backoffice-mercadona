export { default } from "next-auth/middleware"

export const config = { matcher: ["/produit/:path*", "/categorie/:path*", "/utilisateur/:path*" ] }
