"use client";

interface ImageWithErrorHandlerProps {
  src: string;
  alt: string;
  className?: string;
  defaultSrc?: string;
}

const ImageWithErrorHandler: React.FC<ImageWithErrorHandlerProps> = ({
  src,
  alt,
  className,
  defaultSrc,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        if (defaultSrc) {
          e.currentTarget.src = defaultSrc;
        }
      }}
    />
  );
};

export default ImageWithErrorHandler;
