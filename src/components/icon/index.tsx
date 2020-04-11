import React, { useMemo } from 'react';
import classNames from 'classnames';

export interface IconProps {
  type: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ type, size, color, style: originStyle }) => {
  const style = useMemo(
    () => ({
      fontSize: size ? (size / 100) + 'rem' : undefined,
      color,
      ...(originStyle || {})
    }),
    [size, color, originStyle]
  );

  return <i className={classNames('iconfont', type)} style={style} />;
};

export default Icon;
