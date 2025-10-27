import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("sale");

  const properties = [
    {
      id: 1,
      title: "Современная квартира в центре",
      price: "12 500 000 ₽",
      location: "Москва, ЦАО",
      area: "85 м²",
      rooms: 3,
      image: "https://cdn.poehali.dev/files/f04dc379-cbda-426f-be77-1a5896c0f476.png",
      type: "sale"
    },
    {
      id: 2,
      title: "Просторная студия у метро",
      price: "45 000 ₽/мес",
      location: "Санкт-Петербург, Центральный",
      area: "42 м²",
      rooms: 1,
      image: "https://cdn.poehali.dev/files/f04dc379-cbda-426f-be77-1a5896c0f476.png",
      type: "rent"
    },
    {
      id: 3,
      title: "Элитный пентхаус",
      price: "45 000 000 ₽",
      location: "Москва, Пресненский район",
      area: "220 м²",
      rooms: 5,
      image: "https://cdn.poehali.dev/files/f04dc379-cbda-426f-be77-1a5896c0f476.png",
      type: "sale"
    },
    {
      id: 4,
      title: "Уютная двушка рядом с парком",
      price: "60 000 ₽/мес",
      location: "Москва, ЮЗАО",
      area: "65 м²",
      rooms: 2,
      image: "https://cdn.poehali.dev/files/f04dc379-cbda-426f-be77-1a5896c0f476.png",
      type: "rent"
    },
  ];

  const filteredProperties = properties.filter(p => p.type === propertyType);

  return (
    <>
      <Helmet>
        <title>Портал недвижимости - Найдите свой дом</title>
        <meta name="description" content="Современный портал для поиска и размещения объявлений о недвижимости" />
      </Helmet>

      <div className="min-h-screen">
        <header className="border-b backdrop-blur-sm bg-white/80 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Портал недвижимости
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Каталог
              </Link>
              <Link to="/app" className="text-foreground/80 hover:text-foreground transition-colors">
                Приложение
              </Link>
              <Link to="/login" className="text-foreground/80 hover:text-foreground transition-colors">
                Войти
              </Link>
              <Link to="/dashboard">
                <Button>
                  Разместить объявление
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Найдите дом мечты
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Тысячи объектов недвижимости по всей России. Быстрый поиск, проверенные объявления
              </p>
              
              <Card className="backdrop-blur-xl bg-white/80 border-white/20 shadow-2xl animate-scale-in">
                <CardContent className="p-6">
                  <Tabs value={propertyType} onValueChange={setPropertyType}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="sale">Купить</TabsTrigger>
                      <TabsTrigger value="rent">Снять</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="flex gap-3">
                    <Input
                      placeholder="Город, район или адрес..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 h-12 text-lg"
                    />
                    <Button size="lg" className="h-12 px-8">
                      <Icon name="Search" className="mr-2" size={20} />
                      Найти
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {propertyType === "sale" ? "Объекты на продажу" : "Объекты в аренду"}
              </h2>
              <p className="text-muted-foreground">
                Найдено {filteredProperties.length} объектов
              </p>
            </div>
            
            <Button variant="outline" className="gap-2">
              <Icon name="SlidersHorizontal" size={20} />
              Фильтры
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((property, index) => (
              <Card 
                key={property.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-foreground hover:bg-white">
                    {property.type === "sale" ? "Продажа" : "Аренда"}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Maximize2" size={16} />
                      {property.area}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="DoorOpen" size={16} />
                      {property.rooms} комн.
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Загрузить еще
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
                <p className="text-lg text-muted-foreground">
                  Современная платформа для покупки, продажи и аренды недвижимости
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "Shield",
                    title: "Проверенные объявления",
                    description: "Все объекты проходят модерацию"
                  },
                  {
                    icon: "Clock",
                    title: "Быстрый поиск",
                    description: "Находите подходящие варианты за минуты"
                  },
                  {
                    icon: "Users",
                    title: "Прямая связь",
                    description: "Общайтесь напрямую с владельцами"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon name={feature.icon as any} size={32} className="text-white" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon name="Home" size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-lg">Портал недвижимости</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Современная платформа для поиска недвижимости
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-muted-foreground hover:text-foreground">О нас</Link></li>
                  <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Контакты</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Для пользователей</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground">Разместить объявление</Link></li>
                  <li><Link to="/app" className="text-muted-foreground hover:text-foreground">Мобильное приложение</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Документы</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Политика конфиденциальности</Link></li>
                  <li><Link to="/user-agreement" className="text-muted-foreground hover:text-foreground">Пользовательское соглашение</Link></li>
                  <li><Link to="/personal-data-consent" className="text-muted-foreground hover:text-foreground">Согласие на обработку данных</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© 2024 Портал недвижимости. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
