// Animate skill bars
document.querySelectorAll('.bar span').forEach(bar => {
	bar.style.width = bar.style.width = bar.style.getPropertyValue('--width') || bar.style.width;
});

