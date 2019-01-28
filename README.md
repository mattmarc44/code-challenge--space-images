# Space Images site

## Scenario

You've just been handed a project from a new client who is really into photos of space. The client collected a bunch they've found online, set them up in the `images.json` file. It appears, they've been manually updating their website each day to change the images. However, this was super time consuming & they'd prefer the site update itself (So they just have to update the `images.json` file).

They started doing the changes themselves (So have left a few comments in the code, along with a few debugging notices), but were called off into an adventure. So it's up to you to finish the job! 

## Getting setup

Fork this repo onto your own account (Click the "Fork" button on the top right of this page), then clone the forked repo to your local machine.

Next use [Yarn](https://yarnpkg.com/en/docs/install) to install the libraries (However, if you'd prefer to link to the libraries a different way that's a-ok!). The libraries the client started using are:

 - [Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
 - [jQuery](https://api.jquery.com/)
 - [Underscore.js](https://underscorejs.org/) - A library adding some useful functionality to JavaScript, like the `_.shuffle()` method.

From there, you should just be able to drag and drop the `index.html` into your browser & start working.

### When you're done

Commit your changes & push them up to your forked repo. Then open a Pull Request for ..., we'll review you work remotely!

## Your tasks

### Task 1: "See other images"

You client wants the visitors to be shuffle though all the images (Not just the 3 they pre-selected). They've not fussed about repeats, but just something to make the site feel more dynamic. 

They decided it would be nice to add a "See other images" button, which upon being clicked would make an AJAX call their `images.json` file, shuffle the response, then update the images in the `.image-collection` div tag.

### Task 2: "Random first"

The client wants the images to change with each page load, so every time they view the site it feels like a new set of images. 

## Credits

Images from: https://imgur.com/gallery/lgibJ
