import React, { useState } from 'react';
import { Upload, Video, Settings, Play, Type } from 'lucide-react';

function App() {
  const [subtitleStyle, setSubtitleStyle] = useState({
    font: 'impact',
    size: 'md',
    background: 'solid',
    color: 'white',
    effect: 'none',
    animation: 'none'
  });

  const previewText = "Voici à quoi ressembleront vos sous-titres";

  const getBackgroundStyle = (style: string) => {
    switch (style) {
      case 'solid':
        return 'bg-black bg-opacity-70';
      case 'gradient':
        return 'bg-gradient-to-r from-black to-gray-800 bg-opacity-70';
      case 'blur':
        return 'backdrop-blur-md bg-black bg-opacity-30';
      case 'bubble':
        return 'rounded-full bg-black bg-opacity-70';
      case 'rectangle':
        return 'rounded-xl bg-black bg-opacity-70';
      case 'wave':
        return 'bg-black bg-opacity-70 clip-path-wave';
      case 'splash':
        return 'bg-black bg-opacity-70 clip-path-splash';
      case 'geometric':
        return 'bg-black bg-opacity-70 clip-path-polygon';
      default:
        return '';
    }
  };

  const getFontStyle = (font: string) => {
    switch (font) {
      case 'impact':
        return 'font-impact';
      case 'bebas':
        return 'font-bebas';
      case 'montserrat':
        return 'font-montserrat';
      case 'comic':
        return 'font-comic';
      case 'roboto':
        return 'font-roboto';
      case 'dancing':
        return 'font-dancing';
      default:
        return 'font-impact';
    }
  };

  const getTextColorStyle = (color: string) => {
    switch (color) {
      case 'white':
        return 'text-white';
      case 'yellow':
        return 'text-yellow-400';
      case 'red':
        return 'text-red-500';
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      case 'purple':
        return 'text-purple-500';
      case 'gradient-rainbow':
        return 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500';
      case 'gradient-sunset':
        return 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500';
      case 'gradient-neon':
        return 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600';
      default:
        return 'text-white';
    }
  };

  const getTextSizeStyle = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-lg';
      case 'md':
        return 'text-2xl';
      case 'lg':
        return 'text-4xl';
      case 'xl':
        return 'text-6xl';
      default:
        return 'text-2xl';
    }
  };

  const getEffectStyle = (effect: string) => {
    switch (effect) {
      case 'shadow':
        return 'drop-shadow-lg';
      case 'outline':
        return 'text-stroke-2';
      case 'glow':
        return 'text-glow';
      case '3d':
        return 'text-3d';
      case 'metallic':
        return 'text-metallic';
      case 'neon':
        return 'text-neon';
      case 'glitch':
        return 'text-glitch';
      case 'sparkle':
        return 'text-sparkle';
      default:
        return '';
    }
  };

  const getAnimationStyle = (animation: string) => {
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide':
        return 'animate-slide-up';
      case 'bounce':
        return 'animate-bounce';
      case 'typing':
        return 'animate-typing';
      case 'wave':
        return 'animate-wave';
      case 'shake':
        return 'animate-shake';
      case 'pop':
        return 'animate-pop';
      default:
        return '';
    }
  };

  const handleStyleChange = (property: string, value: string) => {
    setSubtitleStyle(prev => ({
      ...prev,
      [property]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Éditeur de Clips Vidéo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <button className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Upload className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Fichier Local</h2>
            <p className="text-gray-600 mt-2 text-center">
              Charger une vidéo depuis votre ordinateur
            </p>
          </button>

          <button className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Video className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">YouTube</h2>
            <p className="text-gray-600 mt-2 text-center">
              Télécharger une vidéo depuis YouTube
            </p>
          </button>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Settings className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Paramètres</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durée moyenne des clips (secondes)
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue={30}
                min={5}
                max={300}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de clips à générer
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue={5}
                min={1}
                max={20}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="subtitles"
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  defaultChecked
                />
                <label htmlFor="subtitles" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Type className="w-4 h-4" />
                  Générer les sous-titres avec Whisper
                </label>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Style des sous-titres</h3>

                {/* Prévisualisation des sous-titres */}
                <div className="relative w-full h-48 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg overflow-hidden mb-6">
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 w-auto">
                    <div className={`
                      ${getBackgroundStyle(subtitleStyle.background)}
                      ${getFontStyle(subtitleStyle.font)}
                      ${getTextColorStyle(subtitleStyle.color)}
                      ${getTextSizeStyle(subtitleStyle.size)}
                      ${getEffectStyle(subtitleStyle.effect)}
                      ${getAnimationStyle(subtitleStyle.animation)}
                      px-6 py-3 inline-block
                    `}>
                      {previewText}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Police d'écriture
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      value={subtitleStyle.font}
                      onChange={(e) => handleStyleChange('font', e.target.value)}
                    >
                      <option value="impact">Impact (Style Meme)</option>
                      <option value="bebas">Bebas Neue (Dynamique)</option>
                      <option value="montserrat">Montserrat (Modern)</option>
                      <option value="comic">Comic Sans (Fun)</option>
                      <option value="roboto">Roboto (Clean)</option>
                      <option value="dancing">Dancing Script (Élégant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Taille du texte
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      value={subtitleStyle.size}
                      onChange={(e) => handleStyleChange('size', e.target.value)}
                    >
                      <option value="sm">Petit</option>
                      <option value="md">Moyen</option>
                      <option value="lg">Grand</option>
                      <option value="xl">Très grand</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Style de fond
                  </label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    value={subtitleStyle.background}
                    onChange={(e) => handleStyleChange('background', e.target.value)}
                  >
                    <option value="none">Sans fond</option>
                    <option value="solid">Fond uni</option>
                    <option value="gradient">Dégradé</option>
                    <option value="blur">Flou artistique</option>
                    <option value="bubble">Bulle de dialogue</option>
                    <option value="rectangle">Rectangle arrondi</option>
                    <option value="wave">Vague dynamique</option>
                    <option value="splash">Éclaboussure</option>
                    <option value="geometric">Formes géométriques</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Couleur du texte
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      value={subtitleStyle.color}
                      onChange={(e) => handleStyleChange('color', e.target.value)}
                    >
                      <option value="white">Blanc</option>
                      <option value="yellow">Jaune</option>
                      <option value="red">Rouge</option>
                      <option value="blue">Bleu</option>
                      <option value="green">Vert</option>
                      <option value="purple">Violet</option>
                      <option value="gradient-rainbow">Arc-en-ciel</option>
                      <option value="gradient-sunset">Coucher de soleil</option>
                      <option value="gradient-neon">Néon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Effets spéciaux
                    </label>
                    <select 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      value={subtitleStyle.effect}
                      onChange={(e) => handleStyleChange('effect', e.target.value)}
                    >
                      <option value="none">Aucun</option>
                      <option value="shadow">Ombre portée</option>
                      <option value="outline">Contour</option>
                      <option value="glow">Lueur</option>
                      <option value="3d">3D</option>
                      <option value="metallic">Métallique</option>
                      <option value="neon">Néon</option>
                      <option value="glitch">Glitch</option>
                      <option value="sparkle">Étincelles</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Animation
                  </label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    value={subtitleStyle.animation}
                    onChange={(e) => handleStyleChange('animation', e.target.value)}
                  >
                    <option value="none">Aucune</option>
                    <option value="fade">Fondu</option>
                    <option value="slide">Glissement</option>
                    <option value="bounce">Rebond</option>
                    <option value="typing">Machine à écrire</option>
                    <option value="wave">Vague</option>
                    <option value="shake">Tremblement</option>
                    <option value="pop">Pop</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
              <Play className="w-5 h-5" />
              Générer les clips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;