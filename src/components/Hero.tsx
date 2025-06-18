"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create floating elements
    const elements = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(17, 24, 39, 0.8)"); // slate-900
      gradient.addColorStop(1, "rgba(30, 41, 59, 0.8)"); // slate-800
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating elements
      elements.forEach((element) => {
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${element.opacity})`; // teal-500
        ctx.fill();

        // Update position
        element.x += element.speedX;
        element.y += element.speedY;

        // Bounce off edges
        if (element.x < 0 || element.x > canvas.width) element.speedX *= -1;
        if (element.y < 0 || element.y > canvas.height) element.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-mono font-bold mb-6 text-white">
          Pulsekeep
        </h1>
        <p className="text-2xl md:text-3xl font-sans mb-8 text-slate-300">
          Tuning your systems to pulse with purpose.
        </p>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          We help digital-first organizations bring clarity to their data. From
          unifying sources to building custom tools, Pulsekeep strengthens your
          community with structured insight.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-magenta-500 hover:from-teal-600 hover:to-magenta-600 text-white font-mono rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
