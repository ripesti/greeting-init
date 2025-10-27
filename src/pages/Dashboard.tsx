import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const [userProperties] = useState([
    {
      id: 1,
      title: "Современная квартира в центре",
      price: "12 500 000 ₽",
      status: "active",
      views: 342,
      favorites: 28,
    },
    {
      id: 2,
      title: "Элитный пентхаус",
      price: "45 000 000 ₽",
      status: "moderation",
      views: 89,
      favorites: 12,
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Личный кабинет - Портал недвижимости</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
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
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost">На главную</Button>
              </Link>
              <Button variant="outline">
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
            <p className="text-muted-foreground">Управляйте своими объявлениями</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
            {[
              { label: "Активных", value: "1", icon: "CheckCircle2", color: "text-green-600" },
              { label: "На модерации", value: "1", icon: "Clock", color: "text-yellow-600" },
              { label: "Просмотров", value: "431", icon: "Eye", color: "text-blue-600" },
              { label: "В избранном", value: "40", icon: "Heart", color: "text-red-600" },
            ].map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${stat.color}`}>
                      <Icon name={stat.icon as any} size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Мои объявления</CardTitle>
                  <CardDescription>Управление размещенными объектами</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить объявление
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="active">Активные</TabsTrigger>
                  <TabsTrigger value="moderation">На модерации</TabsTrigger>
                  <TabsTrigger value="archived">Архив</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {userProperties.map((property) => (
                    <Card key={property.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{property.title}</h3>
                              <Badge variant={property.status === "active" ? "default" : "secondary"}>
                                {property.status === "active" ? "Активно" : "На модерации"}
                              </Badge>
                            </div>
                            <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Icon name="Eye" size={16} />
                                {property.views} просмотров
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Heart" size={16} />
                                {property.favorites} в избранном
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                              <Icon name="Pencil" size={18} />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Icon name="Trash2" size={18} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="active">
                  <p className="text-center py-8 text-muted-foreground">Активные объявления отображаются здесь</p>
                </TabsContent>

                <TabsContent value="moderation">
                  <p className="text-center py-8 text-muted-foreground">Объявления на модерации отображаются здесь</p>
                </TabsContent>

                <TabsContent value="archived">
                  <p className="text-center py-8 text-muted-foreground">Архивированные объявления отображаются здесь</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
