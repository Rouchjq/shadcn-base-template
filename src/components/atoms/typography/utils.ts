import { cva } from 'class-variance-authority';

export const tagName = Object.freeze({
	a: 'a',
	p: 'p',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	ul: 'ul',
	h6: 'h6',
	li: 'li',
	span: 'span',
	label: 'label',
});

export const fontSize = {
	body: 'text-[16px] font-[400] text-justify',
	title: 'text-[20px] font-[600] md:font-[700]',
	button: 'text-[14px] font-[500] md:font-[600]',
	small: 'text-[16px] md:text-[14px] font-[400]',
	minimum: 'text-[14px] md:text-[12px] font-[400]',
	subtitle: 'text-[18px] md:text-[17px] font-[500]',
	label: 'text-[16px] md:text-[15px] font-[600] md:font-[700]',
};

export const weight = {
	bold: 'font-[700]',
	light: 'font-[300]',
	medium: 'font-[500]',
	regular: 'font-[400]',
	semiBold: 'font-[600]',
};

export const color = {
	card: 'text-card',
	ring: 'text-ring',
	input: 'text-input',
	muted: 'text-muted',
	accent: 'text-accent',
	border: 'text-border',
	primary: 'text-primary',
	popover: 'text-popover',
	tertiary: 'text-tertiary',
	secondary: 'text-secondary',
	foreground: 'text-foreground',
	background: 'text-background',
	destructive: 'text-destructive',
};

export const typographyVariants = cva(
	'm-0 p-0',

	{
		variants: {
			color,
			weight,
			fontSize,
		},
	},
);
