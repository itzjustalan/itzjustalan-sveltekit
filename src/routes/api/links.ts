import { getAllPublicLinks } from '$lib/services/links.service'

export async function get() {

  const links = await getAllPublicLinks()

  if (links) {
    return {
      body: { links }
    };
  }
 
  return {
    status: 404,
    body: 'Not Found!'
  };
}
