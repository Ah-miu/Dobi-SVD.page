//---------------------
// icon and blog
//---------------------
document.addEventListener("DOMContentLoaded", () => {
  // Get popup and iframe elements
  const modal = document.getElementById("blog-modal");
  const blogIframe = document.getElementById("blog-iframe");
  const closeBtn = document.querySelector(".blog-modal-close");

  // get all icons
  const icons = document.querySelectorAll(".icon");

  // add click event
  icons.forEach((icon) => {
      icon.addEventListener("click", () => {
          // get blog path
          const blogPath = icon.getAttribute("data-blog");
          // load
          blogIframe.src = blogPath;
          // show
          modal.style.display = "flex";
      });
  });

  // close blog window
  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      blogIframe.src = ""; // clear iframe
  });

  // click outside blog window to close it
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
          blogIframe.src = "";
      }
  });
});


//---------------------
// icon and demo
//---------------------
// Change video function
function changeVideo(videoFile) {
    const videoElement = document.getElementById('video');
    const videoDescription1 = document.getElementById('video-description-video-1');
    const videoDescription2 = document.getElementById('video-description-video-2');
  
    // Fade out current video
    videoElement.classList.remove('video-showing');
  
    setTimeout(() => {
      // Update and play new video
      document.getElementById('video-source').src = videoFile;
      videoElement.load();
      videoElement.play();
  
      // Fade in the new video
      videoElement.classList.add('video-showing');
  
      // Switch descriptions based on video file
      if (videoFile === './blog_exp/data/vid/llm_demo.mp4') {
        videoDescription1.style.display = 'block';
        videoDescription2.style.display = 'none';
      } else {
        videoDescription1.style.display = 'none';
        videoDescription2.style.display = 'block';
      }
    }, 500); // Delay before loading new video
  
    // Update active icon
    toggleActiveIcon();
  }
  
  // Activate the clicked icon
  function toggleActiveIcon() {
    const icons = document.querySelectorAll('.text-icon');
    icons.forEach(icon => icon.classList.remove('active'));
    event.target.classList.add('active');
  }
  
  // Ensure video 1 is visible on page load and activate its icon
  window.onload = function() {
    const videoElement = document.getElementById('video');
    const video1Icon = document.querySelector('.icon-video_1');
    
    videoElement.classList.add('video-showing');  // Show video 1
    video1Icon.classList.add('active');  // Activate video 1 icon
  };
  