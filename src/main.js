
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
    <style>
      /* Base Styles */
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #121212;
        color: #ffffff;
        overflow: hidden;
      }

      /* Navbar */
      .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        background-color: #111111;
      }

      .brand-logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .brand-logo img {
        max-width: 100%;
        height: auto;
      }

      /* Hero */
      .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #111111;
        text-align: center;
        color: #ffffff;
        padding: 2rem;
      }

      .hero img {
        width: 100%;
        height: auto;
      }

      /* Footer */
      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #111111;
        color: #ffffff;
        padding: 0.5rem;
        text-align: center;
      }

      .footer p {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>