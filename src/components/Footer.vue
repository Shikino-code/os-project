<template>
  <footer
    class="v-footer d-block py-6 v-sheet theme--dark grey darken-4"
    id="footer"
    data-booted="true"
  >
    <div class="container text-center">
      <div class="row">
        <div class="col col-12">
          <div
            class="v-image v-responsive mx-auto theme--dark"
            style="height: 64px; width: 64px"
          >
            <div
              class="v-responsive__sizer"
              style="padding-bottom: 114.244%"
            ></div>
            <div
              class="v-image__image v-image__image--contain"
              style="
                background-image: url('https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg');
                background-position: center center;
              "
            ></div>
            <div class="v-responsive__content" style="width: 344px"></div>
          </div>
        </div>
        <div class="col col-12">
          <a
            aria-label="reddit"
            href="เอาไว้ใส่ลิงก์"
            title="Reddit"
            rel="noopener"
            target="_blank"
            class="ma-3 d-inline-block"
            ><span aria-hidden="true" class="v-icon notranslate theme--dark"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="v-icon__svg"
              >
                <path
                  d="M14.5 15.41C14.58 15.5 14.58 15.69 14.5 15.8C13.77 16.5 12.41 16.56 12 16.56C11.61 16.56 10.25 16.5 9.54 15.8C9.44 15.69 9.44 15.5 9.54 15.41C9.65 15.31 9.82 15.31 9.92 15.41C10.38 15.87 11.33 16 12 16C12.69 16 13.66 15.87 14.1 15.41C14.21 15.31 14.38 15.31 14.5 15.41M10.75 13.04C10.75 12.47 10.28 12 9.71 12C9.14 12 8.67 12.47 8.67 13.04C8.67 13.61 9.14 14.09 9.71 14.08C10.28 14.08 10.75 13.61 10.75 13.04M14.29 12C13.72 12 13.25 12.5 13.25 13.05S13.72 14.09 14.29 14.09C14.86 14.09 15.33 13.61 15.33 13.05C15.33 12.5 14.86 12 14.29 12M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12C2 6.5 6.5 2 12 2S22 6.5 22 12M18.67 12C18.67 11.19 18 10.54 17.22 10.54C16.82 10.54 16.46 10.7 16.2 10.95C15.2 10.23 13.83 9.77 12.3 9.71L12.97 6.58L15.14 7.05C15.16 7.6 15.62 8.04 16.18 8.04C16.75 8.04 17.22 7.57 17.22 7C17.22 6.43 16.75 5.96 16.18 5.96C15.77 5.96 15.41 6.2 15.25 6.55L12.82 6.03C12.75 6 12.68 6.03 12.63 6.07C12.57 6.11 12.54 6.17 12.53 6.24L11.79 9.72C10.24 9.77 8.84 10.23 7.82 10.96C7.56 10.71 7.2 10.56 6.81 10.56C6 10.56 5.35 11.21 5.35 12C5.35 12.61 5.71 13.11 6.21 13.34C6.19 13.5 6.18 13.62 6.18 13.78C6.18 16 8.79 17.85 12 17.85C15.23 17.85 17.85 16.03 17.85 13.78C17.85 13.64 17.84 13.5 17.81 13.34C18.31 13.11 18.67 12.6 18.67 12Z"
                ></path></svg></span></a
          ><a
            aria-label="github"
            href="เอาไว้ใส่ลิงก์"
            title="GitHub"
            rel="noopener"
            target="_blank"
            class="ma-3 d-inline-block"
            ><span aria-hidden="true" class="v-icon notranslate theme--dark"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="v-icon__svg"
              >
                <path
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path></svg></span></a
          ><a
            aria-label="twitter"
            href="เอาไว้ใส่ลิงก์"
            title="Twitter"
            rel="noopener"
            target="_blank"
            class="ma-3 d-inline-block"
            ><span aria-hidden="true" class="v-icon notranslate theme--dark"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="v-icon__svg"
              >
                <path
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                ></path></svg></span></a
          ><a
            aria-label="discord"
            href="เอาไว้ใส่ลิงก์"
            title="Discord"
            rel="noopener"
            target="_blank"
            class="ma-3 d-inline-block"
            ><span aria-hidden="true" class="v-icon notranslate theme--dark"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                class="v-icon__svg"
              >
                <path
                  d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"
                ></path></svg></span
          ></a>
        </div>
        
        <div class="col col-12">
          <div
            class="v-responsive mx-auto"
            style="max-width: 70%; width: 150px"
          >
            <div class="v-responsive__content">
              <hr
                role="separator"
                aria-orientation="horizontal"
                class="v-divider theme--dark"
              />
            </div>
          </div>
        </div>
        <div class="col col-12">
          <div class="mb-4"><span>Copyright © 2021-2021 OS Project </span></div>
          <a
            rel="noopener"
            target="_blank"
            href="เอาไว้ใส่ลิงก์"
            class="grey--text text--lighten-1"
            >Privacy Policy</a
          >
          •
          <a
            rel="noopener"
            target="_blank"
            href="เอาไว้ใส่ลิงก์"
            class="grey--text text--lighten-1"
            >Cookie policy</a
          >
          •
          <a
            rel="noopener"
            target="_blank"
            href="mailto:thirawatp9@gmail.com"
            class="grey--text text--lighten-1"
            >Contact Us</a
          ><!---->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

export default {
  name: "Footer"
}