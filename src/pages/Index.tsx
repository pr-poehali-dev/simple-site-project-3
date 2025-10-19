import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const weapons = [
    {
      name: "AK-47",
      type: "Rifle",
      damage: "36",
      price: "$2700",
      icon: "Crosshair"
    },
    {
      name: "M4A4",
      type: "Rifle",
      damage: "33",
      price: "$3100",
      icon: "Crosshair"
    },
    {
      name: "AWP",
      type: "Sniper",
      damage: "115",
      price: "$4750",
      icon: "Target"
    },
    {
      name: "Desert Eagle",
      type: "Pistol",
      damage: "53",
      price: "$700",
      icon: "Zap"
    }
  ];

  const maps = [
    {
      name: "Dust II",
      description: "Классическая карта в пустыне",
      difficulty: "Средняя",
      icon: "Map"
    },
    {
      name: "Mirage",
      description: "Карта в марокканском стиле",
      difficulty: "Средняя",
      icon: "MapPin"
    },
    {
      name: "Inferno",
      description: "Итальянская деревня",
      difficulty: "Сложная",
      icon: "Flame"
    },
    {
      name: "Nuke",
      description: "Ядерная электростанция",
      difficulty: "Сложная",
      icon: "Radiation"
    }
  ];

  const tips = [
    {
      title: "Контроль отдачи",
      description: "Тренируйте контроль отдачи на каждом оружии",
      icon: "Target"
    },
    {
      title: "Экономика",
      description: "Следите за экономикой команды и противников",
      icon: "DollarSign"
    },
    {
      title: "Позиционирование",
      description: "Учите углы и позиции на каждой карте",
      icon: "MapPinned"
    },
    {
      title: "Коммуникация",
      description: "Общайтесь с командой и давайте информацию",
      icon: "MessageSquare"
    }
  ];

  const news = [
    {
      title: "Новое обновление CS2",
      date: "15 октября 2024",
      category: "Патчи"
    },
    {
      title: "Major турнир в Копенгагене",
      date: "10 октября 2024",
      category: "Киберспорт"
    },
    {
      title: "Изменения баланса оружия",
      date: "5 октября 2024",
      category: "Патчи"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_50%)]" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 border-primary text-primary hover:bg-primary/30">
              <Icon name="Gamepad2" size={16} className="mr-2" />
              Counter-Strike 2
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                COUNTER-STRIKE 2
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Легендарный тактический шутер нового поколения. Совершенствуй навыки, изучай стратегии и побеждай
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/50"
              >
                <Icon name="PlayCircle" className="mr-2" size={24} />
                Начать играть
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-secondary text-secondary hover:bg-secondary/10 hover:scale-105 transition-all"
              >
                <Icon name="Trophy" className="mr-2" size={24} />
                Киберспорт
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Арсенал оружия
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Мощное вооружение для любой тактики
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {weapons.map((weapon, index) => (
              <Card 
                key={index}
                className="p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 bg-card group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={weapon.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary">
                    {weapon.type}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{weapon.name}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Урон:</span>
                    <span className="text-primary font-bold">{weapon.damage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Цена:</span>
                    <span className="text-accent font-bold">{weapon.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Карты CS2
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Изучай локации и доминируй
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {maps.map((map, index) => (
              <Card 
                key={index}
                className="p-6 border-2 border-border hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <Icon name={map.icon as any} size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{map.name}</h3>
                <p className="text-muted-foreground mb-3">{map.description}</p>
                <Badge className="bg-muted text-foreground">{map.difficulty}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Советы игрокам
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Прокачивай скилл и поднимайся в рейтинге
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <Card 
                  key={index}
                  className="p-8 border-2 border-border hover:border-accent transition-all duration-300 bg-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <Icon name={tip.icon as any} size={28} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
                      <p className="text-muted-foreground text-lg">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Новости и обновления
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Последние события из мира CS2
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-up">
              {news.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] bg-card cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary">
                      {item.category}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                COUNTER-STRIKE 2
              </h3>
              <p className="text-muted-foreground">Играй. Побеждай. Доминируй.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Icon name="Twitch" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
