const inputs = document.querySelectorAll('.controls input');

   function handleUpdate() {
  if (this.name === 'volume') {
    video.volume = this.value;
  } else if (this.name === 'playbackRate') {
    video.playbackRate = this.value;
  } else {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
}


    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
