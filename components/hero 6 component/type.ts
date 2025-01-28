export interface SlideData {
  title: string;
  button: string;
  src: string;
  youtubeUrl: string;
}
export interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}