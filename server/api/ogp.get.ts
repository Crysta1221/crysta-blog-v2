import { unfurl } from "unfurl.js";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const url = query?.url;

  if (!url) {
    throw createError({
      statusCode: 400,
      statusMessage: "",
    });
  }

  const data = unfurl(`${url}`);

  return data;
});
