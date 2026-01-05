import './GlareHover.css';

const GlareHover = ({
  width = 'auto',
  height = 'auto',
  background = 'transparent',
  borderRadius = '12px',
  borderColor = 'rgba(139, 92, 246, 0.3)',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
  onClick,
  href,
  as = 'div'
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const vars = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': `${glareAngle}deg`,
    '--gh-duration': `${transitionDuration}ms`,
    '--gh-size': `${glareSize}%`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor
  };

  const Component = as === 'a' ? 'a' : as === 'button' ? 'button' : 'div';

  const props = {
    className: `glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${className}`,
    style: { ...vars, ...style },
    onClick,
    ...(as === 'a' && href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})
  };

  return (
    <Component {...props}>
      {children}
    </Component>
  );
};

export default GlareHover;
