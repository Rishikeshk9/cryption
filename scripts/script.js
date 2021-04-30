let scene, camera, renderer, stars, starGeo;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
  );
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  starGeo = new THREE.Geometry();
  for (let i = 0; i < 1000; i++) {
    star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    star.velocity = 0;
    star.acceleration = 0.0001;
    starGeo.vertices.push(star);
  }

  let sprite = new THREE.TextureLoader().load("assets/star.png");
  let starMaterial = new THREE.PointsMaterial({
    color: 0x9900ff,
    size: Math.floor(Math.random() * 0.9) + 0.6, // returns a random integer from 1 to 10
    map: sprite,
  });

  let starMaterial2 = new THREE.PointsMaterial({
    color: 0xffffff,
    size: Math.floor(Math.random() * 0.9) + 0.6,
    map: sprite,
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  stars = new THREE.Points(starGeo, starMaterial2);
  scene.add(stars);
  window.addEventListener("resize", onWindowResize, false);

  animate();
  document.addEventListener("mousemove", onMouseMove, false);
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate() {
  starGeo.vertices.forEach((p) => {
    p.velocity += p.acceleration;
    p.y -= p.velocity;

    if (p.y < -200) {
      p.y = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.y += 0.0001;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
function onMouseMove(event) {
  mouseX = event.clientX - window.innerWidth / 2;
  mouseY = event.clientY - window.innerHeight / 2;
  camera.position.x += (mouseX - camera.position.x) * 0.0000005;
  camera.position.y += (mouseY - camera.position.y) * 0.0000005;
  //set up camera position
  camera.lookAt(scene.position);
}
init();

window.onscroll = function (ev) {
  myID = document.getElementById("mouse_icon");

  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
    // you're at the bottom of the page
    myID.className = "hide";
  } else {
    myID.className = "show";
  }
};

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
AOS.init();


const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});
