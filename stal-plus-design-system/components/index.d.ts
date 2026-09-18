import * as React from 'react';

/** Сталь-Плюс component library (window.StalPlus). */

export interface ButtonProps {
  /** solid = dark ink CTA (default); outline = secondary on light surfaces. */
  variant?: 'solid' | 'outline';
  /** Renders an <a> when set, otherwise a <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Full-width button. */
  block?: boolean;
  /** Optional leading icon node (inline SVG). */
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
}
/** Primary call to action. Uppercase label; square corners. */
export function Button(props: ButtonProps): React.ReactElement;

export interface StatTileProps {
  /** The headline figure, e.g. "120+" or "99.9". */
  value: React.ReactNode;
  /** Small trailing unit rendered inside the figure, e.g. "минут", "мм", "%". */
  unit?: React.ReactNode;
  /** Uppercase caption under the figure, e.g. "ТЫСЯЧ ИЗДЕЛИЙ". */
  label: React.ReactNode;
  className?: string;
}
/** Proof statistic: large azure figure over a muted uppercase caption. */
export function StatTile(props: StatTileProps): React.ReactElement;

export interface FeatureCardProps {
  /** Blue line icon node (inline SVG using currentColor). */
  icon?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  /** Supporting copy. */
  children?: React.ReactNode;
}
/** "Почему нас выбирают"-style benefit card: white, bordered, softly raised. */
export function FeatureCard(props: FeatureCardProps): React.ReactElement;

export interface SectionHeadingProps {
  /** Heading tag; defaults to h2. */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
/** Uppercase azure section title. */
export function SectionHeading(props: SectionHeadingProps): React.ReactElement;
