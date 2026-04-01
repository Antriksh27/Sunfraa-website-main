'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Mail, MapPin, Phone } from 'lucide-react';
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
		<footer className="relative w-full bg-surface border-t border-white/[0.03] overflow-hidden">
			{/* Top gradient line */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

			{/* Radial glow at top center */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />

			{/* Decorative vertical lines */}
			<div className="absolute top-0 left-24 w-px h-full bg-white/[0.02] pointer-events-none" />
			<div className="absolute top-0 right-24 w-px h-full bg-white/[0.02] pointer-events-none" />

			<div className="s-container relative z-10 py-16 lg:py-24">
				<div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-16">
					{/* Brand Column */}
					<AnimatedContainer className="space-y-8">
						<Link href="/" className="group inline-flex items-center">
							<div className="relative h-14 md:h-16 bg-white p-3 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.05)] ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-[0_0_60px_rgba(234,126,38,0.1)]">
								<img
									src="/sunfraa-global-logo.png"
									alt="Sunfraa Global"
									className="w-auto h-full object-contain"
								/>
							</div>
						</Link>

						<p className="text-on-surface/50 text-sm font-body max-w-xs leading-relaxed italic">
							Engineering the transition to industrial autonomy. High-precision EPC protocols for the Indian solar sector.
						</p>

						{/* Certification badges */}
						<div className="flex flex-wrap gap-3 pt-2">
							{['ISO_9001', 'IEC_61215', 'MNRE_CERT'].map((tag) => (
								<span
									key={tag}
									className="text-[0.5rem] font-[800] font-label text-primary/40 border border-primary/10 px-3 py-1.5 uppercase tracking-[0.3em] italic bg-primary/5"
								>
									{tag}
								</span>
							))}
						</div>

						{/* Contact info */}
						<div className="space-y-3 pt-4">
							<a
								href="mailto:ops@sunfraa.com"
								className="flex items-center gap-3 text-on-surface/40 hover:text-primary transition-colors duration-300 text-xs font-label uppercase tracking-widest italic"
							>
								<Mail className="size-3.5 text-primary/60" />
								ops@sunfraa.com
							</a>
							<div className="flex items-start gap-3 text-on-surface/30 text-xs font-label uppercase tracking-[0.15em] italic leading-relaxed">
								<MapPin className="size-3.5 text-primary/40 mt-0.5 shrink-0" />
								<span>Block B, Corporate Park<br />Ahmedabad, GJ 380001</span>
							</div>
						</div>
					</AnimatedContainer>

					{/* Navigation Grid */}
					<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-10 md:mb-0">
									<h3 className="text-[0.625rem] font-[800] font-label text-primary uppercase tracking-[0.3em] flex items-center gap-3 italic whitespace-nowrap">
										<span className="w-4 h-px bg-primary/30 shrink-0" />
										{section.label}
									</h3>
									<ul className="mt-6 space-y-3">
										{section.links.map((link) => (
											<li key={link.title}>
												<Link
													href={link.href}
													className="text-[0.75rem] font-[500] font-label text-on-surface/40 hover:text-primary transition-all duration-300 uppercase tracking-[0.2em] italic inline-flex items-center group"
												>
													{link.icon && (
														<link.icon className="me-2 size-3.5 text-on-surface/30 group-hover:text-primary transition-colors duration-300" />
													)}
													{link.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Legal Strip */}
				<AnimatedContainer delay={0.6}>
					<div className="mt-16 lg:mt-24 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
						<div className="flex items-center gap-3">
							<div className="w-2 h-2 bg-primary animate-pulse" />
							<span className="text-[0.625rem] font-[800] font-label text-on-surface/20 uppercase tracking-[0.3em] italic">
								© {new Date().getFullYear()} Sunfraa Global Pvt Ltd // All Rights Reserved
							</span>
						</div>

						<div className="flex gap-8">
							{['Privacy', 'Governance', 'Sitemap'].map((legal) => (
								<Link
									key={legal}
									href="#"
									className="relative text-[0.625rem] font-[800] font-label text-on-surface/20 hover:text-on-surface transition-colors uppercase tracking-[0.3em] italic group"
								>
									{legal}
									<span className="absolute bottom-0 left-0 w-0 h-px bg-on-surface/10 transition-all duration-500 group-hover:w-full" />
								</Link>
							))}
						</div>
					</div>
				</AnimatedContainer>
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
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
