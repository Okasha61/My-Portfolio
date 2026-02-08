        // Loading Screen
        window.addEventListener('load', function () {
            const loadingScreen = document.getElementById('loading-screen');
            const body = document.body;

            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    body.classList.add('loaded');
                }, 500);
            }, 1500);
        });

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            // Update icon
            const icon = themeToggle.querySelector('i');
            if (isDarkMode) {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.className = 'fas fa-moon';
        }

        // Sticky Header
        const header = document.getElementById('mainHeader');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll Progress
        const scrollProgress = document.getElementById('scrollProgress');
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });

        // Back to Top
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Mobile Menu Toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');

        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle menu icon
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        document.getElementById("downloadCV").addEventListener("click", function (e) {
            e.preventDefault(); // page reload stop

            const fileUrl = "cv/Muhammad-Okasha-CV.pdf"; // CV path
            const fileName = "Muhammad-Okasha-CV.pdf";

            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // Section Visibility Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Animate section title underline
                    const title = entry.target.querySelector('.section-title');
                    if (title) {
                        setTimeout(() => {
                            title.classList.add('animated');
                        }, 300);
                    }

                    // Animate about text
                    const aboutText = entry.target.querySelectorAll('.about-text');
                    aboutText.forEach((text, index) => {
                        setTimeout(() => {
                            text.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate stat items
                    const statItems = entry.target.querySelectorAll('.stat-item');
                    statItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate education items
                    const educationItems = entry.target.querySelectorAll('.education-item');
                    educationItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate experience items
                    const experienceItems = entry.target.querySelectorAll('.experience-item');
                    experienceItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate testimonial cards
                    const testimonialCards = entry.target.querySelectorAll('.testimonial-card');
                    testimonialCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate skill items
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });

                    // Animate project cards
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate contact items
                    const contactItems = entry.target.querySelectorAll('.contact-item');
                    contactItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate form groups
                    const formGroups = entry.target.querySelectorAll('.form-group');
                    formGroups.forEach((group, index) => {
                        setTimeout(() => {
                            group.classList.add('visible');
                        }, index * 200);
                    });

                    // Animate social links
                    const socialLinks = entry.target.querySelectorAll('.social-link');
                    socialLinks.forEach((link, index) => {
                        setTimeout(() => {
                            link.classList.add('visible');
                        }, index * 100);
                    });

                    // Animate copyright
                    const copyright = entry.target.querySelector('.copyright');
                    if (copyright) {
                        setTimeout(() => {
                            copyright.classList.add('visible');
                        }, 500);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Image Gallery Functionality
        document.querySelectorAll('.project-gallery').forEach(gallery => {
            const main = gallery.querySelector('.gallery-main');
            const slides = gallery.querySelectorAll('.gallery-slide');
            const dots = gallery.querySelectorAll('.gallery-dot');
            const prevBtn = gallery.querySelector('.gallery-arrow.prev');
            const nextBtn = gallery.querySelector('.gallery-arrow.next');

            let currentSlide = 0;

            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });

                // Remove active from all dots
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });

                // Show current slide
                slides[index].classList.add('active');

                // Activate current dot
                if (dots[index]) {
                    dots[index].classList.add('active');
                }

                currentSlide = index;
            }

            // Next slide
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    let nextIndex = currentSlide + 1;
                    if (nextIndex >= slides.length) nextIndex = 0;
                    showSlide(nextIndex);
                });
            }

            // Previous slide
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    let prevIndex = currentSlide - 1;
                    if (prevIndex < 0) prevIndex = slides.length - 1;
                    showSlide(prevIndex);
                });
            }

            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });

            // Auto slide (optional)
            let slideInterval;

            function startAutoSlide() {
                slideInterval = setInterval(() => {
                    let nextIndex = currentSlide + 1;
                    if (nextIndex >= slides.length) nextIndex = 0;
                    showSlide(nextIndex);
                }, 5000);
            }

            function stopAutoSlide() {
                clearInterval(slideInterval);
            }

            // Start auto slide
            startAutoSlide();

            // Pause on hover
            gallery.addEventListener('mouseenter', stopAutoSlide);
            gallery.addEventListener('mouseleave', startAutoSlide);

            // Click to open lightbox
            slides.forEach((slide, index) => {
                slide.addEventListener('click', () => {
                    const imgSrc = slide.querySelector('img').src;
                    openLightbox(imgSrc, index, gallery);
                });
            });
        });

        // Lightbox Functionality
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxClose = document.getElementById('lightboxClose');
        const lightboxPrev = document.getElementById('lightboxPrev');
        const lightboxNext = document.getElementById('lightboxNext');
        const lightboxCounter = document.getElementById('lightboxCounter');

        let currentGallery = null;
        let currentLightboxIndex = 0;
        let lightboxImages = [];

        function openLightbox(imgSrc, index, gallery) {
            // Get all images from this gallery
            currentGallery = gallery;
            lightboxImages = Array.from(gallery.querySelectorAll('.gallery-slide img')).map(img => img.src);
            currentLightboxIndex = index;

            // Update lightbox
            updateLightbox();

            // Show lightbox
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function updateLightbox() {
            lightboxImg.src = lightboxImages[currentLightboxIndex];
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${lightboxImages.length}`;
        }

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function nextLightboxImage() {
            currentLightboxIndex++;
            if (currentLightboxIndex >= lightboxImages.length) {
                currentLightboxIndex = 0;
            }
            updateLightbox();
        }

        function prevLightboxImage() {
            currentLightboxIndex--;
            if (currentLightboxIndex < 0) {
                currentLightboxIndex = lightboxImages.length - 1;
            }
            updateLightbox();
        }

        // Event Listeners for Lightbox
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxNext.addEventListener('click', nextLightboxImage);
        lightboxPrev.addEventListener('click', prevLightboxImage);

        // Close lightbox on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                closeLightbox();
            }

            // Navigation with arrow keys
            if (lightboxModal.classList.contains('active')) {
                if (e.key === 'ArrowRight') {
                    nextLightboxImage();
                }
                if (e.key === 'ArrowLeft') {
                    prevLightboxImage();
                }
            }
        });

        // Close lightbox when clicking outside image
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });

        // Success Popup Functionality
        const successPopup = document.getElementById('successPopup');
        const popupClose = document.getElementById('popupClose');

        function showPopup() {
            successPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            successPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        popupClose.addEventListener('click', closePopup);

        // Close popup on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && successPopup.classList.contains('active')) {
                closePopup();
            }
        });

        // Close popup when clicking outside content
        successPopup.addEventListener('click', (e) => {
            if (e.target === successPopup) {
                closePopup();
            }
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);

            // Show success popup instead of alert
            showPopup();

            // Reset form
            contactForm.reset();

            // Add some animation to the button
            const submitBtn = contactForm.querySelector('.cta-button');
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(90deg, #34a853, #2c8a47)';

            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.style.background = '';
            }, 2000);
        });

        // Nav Link Active State
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');

            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Initialize animations on page load
        document.addEventListener('DOMContentLoaded', () => {
            // Trigger initial animations
            const heroSection = document.querySelector('.hero');
            heroSection.classList.add('visible');

            // Animate stats with counting effect
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                    }
                }, 30);
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            const heroImage = document.querySelector('.hero-image');

            if (heroContent && heroImage && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                heroImage.style.transform = `translateY(${scrolled * 0.05}px)`;
            }
        });

        // Testimonials Auto-Slide
        let currentTestimonialSlide = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        const testimonialsContainer = document.querySelector('.testimonials-container');

        function showTestimonialSlide(index) {
            if (index >= testimonialSlides.length) {
                currentTestimonialSlide = 0;
            } else if (index < 0) {
                currentTestimonialSlide = testimonialSlides.length - 1;
            } else {
                currentTestimonialSlide = index;
            }

            testimonialsContainer.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;

            // Update dots
            testimonialDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentTestimonialSlide);
            });
        }

        // Auto slide testimonials every 5 seconds
        let testimonialInterval = setInterval(() => {
            showTestimonialSlide(currentTestimonialSlide + 1);
        }, 5000);

        // Dot click events
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonialSlide(index);
                // Reset interval when user manually changes slide
                clearInterval(testimonialInterval);
                testimonialInterval = setInterval(() => {
                    showTestimonialSlide(currentTestimonialSlide + 1);
                }, 5000);
            });
        });

        // Initialize testimonial slides
        showTestimonialSlide(0);

        // Pause auto-slide on hover
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                showTestimonialSlide(currentTestimonialSlide + 1);
            }, 5000);
        });
    