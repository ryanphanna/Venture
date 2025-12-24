import { Sparkles, Heart, MapPin, Gift, Lightbulb } from 'lucide-react';

const TipCard = ({ tip, size = 'medium' }) => {
  // Size classes for bento grid
  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 md:col-span-2',
    large: 'col-span-1 md:col-span-2 lg:col-span-3',
  };

  const heightClasses = {
    small: 'h-[400px] sm:h-[450px]',
    medium: 'h-[500px] sm:h-[550px]',
    large: 'h-[600px]',
  };

  // Different visual styles for variety - MORE CONTRAST
  const getStyleByType = () => {
    switch (tip.type) {
      case 'membership':
        return {
          gradient: 'from-accent-gold via-accent-gold/60 to-accent-gold/40',
          icon: Gift,
          iconColor: 'text-white',
          textColor: 'text-white',
          accentColor: 'white'
        };
      case 'insider':
        return {
          gradient: 'from-accent-terracotta via-accent-terracotta/70 to-accent-terracotta/50',
          icon: Lightbulb,
          iconColor: 'text-white',
          textColor: 'text-white',
          accentColor: 'white'
        };
      case 'neighborhood':
        return {
          gradient: 'from-accent-slate via-accent-slate/70 to-accent-slate/50',
          icon: MapPin,
          iconColor: 'text-white',
          textColor: 'text-white',
          accentColor: 'white'
        };
      case 'favorite':
        return {
          gradient: 'from-accent-sage via-accent-sage/70 to-accent-sage/50',
          icon: Heart,
          iconColor: 'text-white',
          textColor: 'text-white',
          accentColor: 'white'
        };
      default:
        return {
          gradient: 'from-neutral-900 via-neutral-800 to-neutral-700',
          icon: Sparkles,
          iconColor: 'text-accent-gold',
          textColor: 'text-white',
          accentColor: 'accent-gold'
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
        rounded-3xl shadow-medium hover:shadow-editorial
        transition-magazine cursor-default hover-elevate
        bg-gradient-to-br ${style.gradient}
      `}
    >
      {/* Decorative elements - MORE SUBTLE */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-24 -translate-x-24 blur-3xl" />

      <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between">
        <div>
          {/* Icon badge - MUCH bigger and bolder */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-editorial shadow-soft mb-6">
            <Icon size={32} strokeWidth={2.5} className={style.iconColor} />
          </div>

          {/* Tip content - MASSIVE editorial typography */}
          <h3 className={`
            font-black ${style.textColor} mb-4 leading-none tracking-tighter
            ${size === 'large' ? 'text-4xl sm:text-5xl md:text-6xl' : size === 'medium' ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl'}
          `}>
            {tip.title}
          </h3>

          {tip.description && (
            <p className={`
              ${style.textColor} opacity-90 leading-relaxed font-medium
              ${size === 'large' ? 'text-xl sm:text-2xl' : size === 'medium' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'}
              ${size === 'small' ? 'line-clamp-3' : size === 'medium' ? 'line-clamp-4' : 'line-clamp-5'}
            `}>
              {tip.description}
            </p>
          )}
        </div>

        {/* Optional label/badge at bottom */}
        {tip.label && (
          <div className="flex items-center gap-2.5 mt-6">
            <div className={`w-1.5 h-1.5 rounded-full bg-${style.accentColor}`} />
            <span className={`text-sm ${style.textColor} opacity-80 font-bold uppercase tracking-widest`}>
              {tip.label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipCard;
