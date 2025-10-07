// Replace this with the short-lived access token from Dropbox App Console
const ACCESS_TOKEN = "sl.u.AF80ZD6DwOsRKIdTI0apE0Ioai0AChLUYEGqflf-SPPgPqJHDZdN4JTpVfzyZquEQojf0UOjRwadQiHjETwrNn0vsS9OkeychcC43Xoe_qmw4WQJjm7vzR-CV1DkcuiMPYBDuki9PZcnZ4ZdbkwASFB78DGxGGjCNYt0pl-FwiETvz9lv6JGDR1zYP4CtLSb6FelpTlTcUNhtVAQArP_2LyTtxNgDyDRtwHH5EXMAFongEmB6lE_IzADEYaGcq4_-hZzXMeupsTMlWKuLzTeygYKf-s1Sg_bnNFqloLfkN6AbrwUhOd9Bra_SBqdXgdl7CuYuCMjY7jl21iDMZRlX5y-t5VV5os2v8JcHpAWW0M0jaryoUpWMTKi7FrDaq_5FOb-Ym2r1DEYNDxDEgzcTj-aKh5ncLgwPLq5qpEJYrGslK7GSx8eoehmYnXzxpE5iRoF8kY2Aeevi8-P5ijwuCwmQNEuIE2Bh4oWzOZg0tEE5mqrgf3Ij7Q8wDurt2X2dDCiuPV3sx0Kjz33-JYvpjpKLm5gXpsa6oYeL5m8_M8YacxRpzMqnnPrYV392pQNM9mYGzF0OIFhXYkMUPuG-FwAwXSVR2-fm1ko39GfSa685WVtC8ZyL8wXin68GT3FNefvox4WlxG-HzUHVGFmu_lq0MUUkIPh8hhY0mRFkJQwQdpbRZjMb_d4oAZCvYye3u9mvH48IURA4sRdgNSdBOTruwUAHIFB4hj5Vh3LJvYohbUItvTCO0yAJlEq7zsY3XkSU8cZQ_xdQuxBQqG7I5tw7iD6idug4ze2K4Vwmwoy8Kh6o79Hk1uffPEKp7FaX3Rx1JezPctRSDi-H0lR7nZCk56jH8GJNKpzsulLWmEHL8ZddDm9DmhCvTIIac42Tk-De8hyP_gBhONOsbjZUZTdqAHAMkpr7tmHGrB7VaEZKz03xSil0pC41BNlULPrIHO8qELzh3DyIRO_xUFzwr72fyKib8i5I8UZVuGNH1TmS4aifSbQ5r5MP2H4Wg2o0aaHRyjEDmX_U8kK1c1OEw9a1-0mlObnWM_8hK5YBm6rvVabtzD0dqt6oMUywar7VIkIs7uBYD4uTYoKJDO3tv-NIwkiq4G3ckcBPhAP2mGS-4L9ZsHU7rkNnA3NQe5gzZ7hg7L6B2uy-C05mDDtietoW44u3hHI9aoGL0ouB3XmdLGRzVvTAALzRjpRCRwOfW3atnbHPRGQgwV_uqqYyaOrEeAi48SH8OgfkWW9BmrozDzQ7AvuGbGEL6enNWdEtnqYTMBgx9bl6F2S66i8YNRQOi-a--IVxB41zIFPoT4JZpFteRFoL251A5V6BzBY8l_-J2dwpgvc5cEDUGKFlhb1KaGnRYKAYjJ1AUQexW0WDeKsljUnGHN2JkDCkKWcSbs__pFdUbowoBF6YV0bo80-";

const dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });

async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("status");

  if (!fileInput.files.length) {
    status.innerText = " Please choose a file first";
    return;
  }

  const file = fileInput.files[0];

  try {
    const response = await dbx.filesUpload({
      path: "/" + file.name,
      contents: file
    });

    status.style.color = "green";
    status.innerText = "Uploaded: " + response.result.name;
  } catch (error) {
    status.style.color = "red";
    status.innerText = "Upload failed: " + error.error || error.message;
    console.error(error);
  }
}