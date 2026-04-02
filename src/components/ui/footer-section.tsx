'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Solutions',
		links: [
			{ title: 'Industrial MW', href: '/#solutions' },
			{ title: 'Institutional', href: '/#solutions' },
			{ title: 'Commercial', href: '/#solutions' },
			{ title: 'Energy Audit', href: '/audit' },
		],
	},
	{
		label: 'Enterprise',
		links: [
			{ title: 'Asset Portfolio', href: '/#projects' },
			{ title: 'The Process', href: '/#process' },
			{ title: 'Authority', href: '/#authority' },
			{ title: 'Technical FAQ', href: '/#faq' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Governance', href: '#' },
			{ title: 'Sitemap', href: '#' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full bg-black s-theme-black border-t border-white/[0.03] overflow-hidden min-h-screen flex flex-col pt-32 pb-20 lg:pt-40 lg:pb-32">
			
			{/* Noise Surface Overlay */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

			{/* Large Industrial Watermark */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0">
				<span className="text-[18vw] font-black text-white/[0.012] tracking-[-0.08em] leading-none uppercase whitespace-nowrap block">
					SUNFRAA
				</span>
			</div>

			{/* Industrial Structural Lines (The Grid) */}
			<div className="absolute inset-0 pointer-events-none z-0 select-none">
				{/* Vertical Accents */}
				<div className="absolute top-0 left-[5%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
				<div className="absolute top-0 right-[5%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />
				<div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.02]" />
				
				{/* Industrial Cross-hairs / Corners */}
				<div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-primary/20" />
				<div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-primary/20" />
				<div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-primary/20" />
				<div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-primary/20" />
			</div>

			<div className="s-container relative z-10">
				<div className="grid w-full gap-16 lg:grid-cols-12">
					
					{/* Brand & Manifesto Column */}
					<div className="lg:col-span-5 space-y-10 lg:pr-12">
						<AnimatedContainer className="space-y-8">
							<div className="space-y-4">
								<span className="s-label block opacity-60">Architects of Energy</span>
								<h2 className="s-h2 !text-white leading-[1.1] !tracking-[-0.04em] lg:!text-5xl">
									Engineering Industrial <br />
									<span className="text-primary italic">Autonomy</span>
								</h2>
							</div>

							<p className="text-zinc-500 text-sm font-body max-w-sm leading-relaxed s-body">
								Sunfraa Global delivers high-precision Solar EPC protocols for the Indian industrial sector. We convert raw radiation into institutional-grade assets with zero margin for error.
							</p>

							{/* Technical Data Points */}
							<div className="grid grid-cols-2 gap-4 border-y border-white/[0.05] py-6">
								<div className="space-y-1">
									<p className="s-mono !text-[8px] !opacity-30">Deployment Radius</p>
									<p className="text-white font-mono text-xs uppercase tracking-widest">Pan-India // GJ HQ</p>
								</div>
								<div className="space-y-1">
									<p className="s-mono !text-[8px] !opacity-30">Validation Standard</p>
									<p className="text-primary font-mono text-xs uppercase tracking-widest">ISO_9001:2015</p>
								</div>
							</div>

							<div className="flex items-center gap-6 pt-4">
								<Link href="/contact" className="group flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-white hover:text-primary transition-all duration-500">
									Initiate Protocol
									<div className="size-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
										<ArrowUpRight className="size-4" />
									</div>
								</Link>
							</div>
						</AnimatedContainer>
					</div>

					{/* Navigation Matrix */}
					<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.2 + index * 0.05}>
								<div className="space-y-8">
									<h3 className="s-label !text-primary !tracking-[0.4em] !text-[10px] flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
										{section.label}
									</h3>
									<ul className="space-y-4">
										{section.links.map((link) => (
											<li key={link.title}>
												<Link
													href={link.href}
													className="text-[10px] font-mono text-zinc-500 hover:text-white transition-all duration-500 uppercase tracking-[0.2em] relative group inline-block"
												>
													{link.title}
													<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary/40 transition-all duration-500 group-hover:w-full" />
												</Link>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Global Contact & Legal Bar */}
				<AnimatedContainer delay={0.6}>
					<div className="mt-24 pt-10 border-t border-white/[0.05] grid lg:grid-cols-2 gap-8 items-end">
						<div className="space-y-6">
							<div className="flex flex-wrap gap-x-12 gap-y-4">
								<a href="mailto:ops@sunfraa.com" className="group flex flex-col gap-1">
									<span className="s-mono !text-[8px] !opacity-30">Direct Inquiries</span>
									<span className="text-white font-mono text-xs tracking-widest hover:text-primary transition-colors">OPS@SUNFRAA.COM</span>
								</a>
								<div className="flex flex-col gap-1">
									<span className="s-mono !text-[8px] !opacity-30">Strategic HQ</span>
									<span className="text-white font-mono text-xs tracking-widest uppercase">Ahmedabad, Gujarat 380001 IN</span>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-start lg:items-end gap-6">
							<div className="flex gap-8">
								{['LinkedIn', 'Instagram', 'Youtube'].map((social) => (
									<Link key={social} href="#" className="s-mono !text-[9px] !opacity-30 hover:!opacity-100 hover:text-primary transition-all tracking-[0.3em]">
										{social.toUpperCase()}
									</Link>
								))}
							</div>
							<div className="flex items-center gap-4">
								<div className="w-20 h-[1px] bg-white/10" />
								<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
									© {new Date().getFullYear()} SUNFRAA GLOBAL — ALL RIGHTS RESERVED
								</span>
							</div>
						</div>
					</div>
				</AnimatedContainer>
			</div>

			{/* Decorative Footer Badge */}
			<div className="absolute bottom-6 left-[5%] rotate-[-90deg] origin-left hidden lg:block">
				<span className="text-[10px] font-mono text-white/[0.05] uppercase tracking-[0.5em] whitespace-nowrap">
					SOLAR SUPREMACY // VERIFIED ASSET
				</span>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', translateY: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ 
				delay, 
				duration: 1,
				ease: [0.16, 1, 0.3, 1] // Custom ease-out
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

