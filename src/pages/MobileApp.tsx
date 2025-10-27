import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MobileApp = () => {
  return (
    <>
      <Helmet>
        <title>Мобильное приложение - Портал недвижимости</title>
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
            <Link to="/">
              <Button variant="ghost">На главную</Button>
            </Link>
          </div>
        </header>

        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Мобильное приложение
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Недвижимость всегда под рукой. Скачайте приложение и находите свой идеальный дом где угодно
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button size="lg" className="gap-2">
                    <Icon name="Apple" size={24} />
                    App Store
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Icon name="Smartphone" size={24} />
                    Google Play
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="animate-slide-up">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon name="Search" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Быстрый поиск</h3>
                    <p className="text-muted-foreground">
                      Находите квартиры и дома с удобными фильтрами прямо с телефона
                    </p>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon name="Bell" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Уведомления</h3>
                    <p className="text-muted-foreground">
                      Получайте мгновенные оповещения о новых объявлениях по вашим критериям
                    </p>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon name="MapPin" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Карта</h3>
                    <p className="text-muted-foreground">
                      Смотрите расположение объектов на интерактивной карте
                    </p>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon name="Heart" size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Избранное</h3>
                    <p className="text-muted-foreground">
                      Сохраняйте понравившиеся объекты и возвращайтесь к ним позже
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary to-accent text-white overflow-hidden relative animate-scale-in">
                <CardContent className="p-12 text-center relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Скачайте прямо сейчас</h2>
                  <p className="text-white/90 mb-6 text-lg">
                    Присоединяйтесь к тысячам пользователей, которые уже нашли свой дом
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Icon name="Apple" size={24} />
                      App Store
                    </Button>
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Icon name="Smartphone" size={24} />
                      Google Play
                    </Button>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileApp;
