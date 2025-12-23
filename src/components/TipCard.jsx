import { Sparkles, Heart, MapPin, Gift, Lightbulb } from 'lucide-react';

const TipCard = ({ tip, size = 'medium' }) => {
  // Size classes for bento grid
  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 md:col-span-2',
    large: 'col-span-1 md:col-span-2 lg:col-span-3',
  };

  const heightClasses = {
    small: 'h-[280px]',
    medium: 'h-[320px] sm:h-[360px]',
    large: 'h-[420px]',
  };

  // Different visual styles for variety
  const getStyleByType = () => {
    switch (tip.type) {
      case 'membership':
        return {
          gradient: 'from-accent-gold/20 via-accent-gold/10 to-accent-cream',
          icon: Gift,
          iconColor: 'text-accent-gold',
          accentColor: 'accent-gold'
        };
      case 'insider':
        return {
          gradient: 'from-accent-sage/20 via-accent-sage/10 to-accent-cream',
          icon: Lightbulb,
          iconColor: 'text-accent-sage',
          accentColor: 'accent-sage'
        };
      case 'neighborhood':
        return {
          gradient: 'from-accent-slate/20 via-accent-slate/10 to-accent-cream',
          icon: MapPin,
          iconColor: 'text-accent-slate',
          accentColor: 'accent-slate'
        };
      case 'favorite':
        return {
          gradient: 'from-accent-terracotta/20 via-accent-terracotta/10 to-accent-cream',
          icon: Heart,
          iconColor: 'text-accent-terracotta',
          accentColor: 'accent-terracotta'
        };
      default:
        return {
          gradient: 'from-primary-100 to-accent-cream',
          icon: Sparkles,
          iconColor: 'text-primary-600',
          accentColor: 'primary-600'
        };
    }
  };

  const style = getStyleByType();
  const Icon = style.icon;

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${heightClasses[size]}
        relative overflow-hidden
        rounded-3xl shadow-soft hover:shadow-medium
        transition-magazine cursor-default
        bg-gradient-to-br ${style.gradient}
        border border-neutral-200/50
      `}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 rounded-full -translate-y-24 translate-x-24 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/40 rounded-full translate-y-16 -translate-x-16 blur-2xl" />

      <div className="relative h-full p-7 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 backdrop-soft shadow-soft mb-5">
            <Icon size={28} strokeWidth={2} className={style.iconColor} />
          </div>

          {/* Tip content */}
          <h3 className={`
            font-bold mb-3 leading-tight-magazine
            ${size === 'large' ? 'text-title-lg sm:text-headline' : 'text-title sm:text-title-lg'}
            text-neutral-900
          `}>
            {tip.title}
          </h3>

          {tip.description && (
            <p className={`
              text-neutral-700 leading-magazine
              ${size === 'large' ? 'text-body-lg' : 'text-body'}
              ${size === 'small' ? 'line-clamp-3' : 'line-clamp-4'}
            `}>
              {tip.description}
            </p>
          )}
        </div>

        {/* Optional label/badge at bottom */}
        {tip.label && (
          <div className="flex items-center gap-2">
            <div className={`w-1 h-1 rounded-full bg-${style.accentColor}`} />
            <span className="text-caption text-neutral-600 font-semibold uppercase tracking-wider">
              {tip.label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipCard;
