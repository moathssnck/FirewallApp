export async function getServerSideProps(context) {
  const req = context.req;

  const ua = req.headers["user-agent"] || "";
  const isMobile = /mobile|android|iphone|ipad|phone/i.test(ua);

  const country = req.headers["cf-ipcountry"] || null;
  console.log(country)

  if (isMobile && (country === "KW" || country === "JO")) {
    return {
      redirect: {
        destination: "https://app.zsdcz.com/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
