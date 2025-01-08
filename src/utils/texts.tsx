interface Props {
  text: string; // El texto completo
  boldWords: string[]; // Palabras que deben ir en negrita
  withClass?: boolean; // Indica si se aplica la clase adicional
}

const HighlightText: React.FC<Props> = ({ text, boldWords, withClass = false }) => {
    const renderText = () => {
        const parts = text.split(new RegExp(`(${boldWords.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi'));
        return parts.map((part, index) => (
            boldWords.some(word => word.toLowerCase() === part.toLowerCase()) ? (
                <b key={index} className={withClass ? "text-gradient-blue" : ""}>{part}</b>
            ) : (
                <span key={index}>{part}</span>
            )
        ));
    };
  
    return (
      <>
        {renderText()}
      </>
    );
};

export default HighlightText;
