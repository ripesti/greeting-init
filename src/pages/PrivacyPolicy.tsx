import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности - Портал недвижимости</title>
      </Helmet>

      <div className="min-h-screen bg-background">
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

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-4xl font-bold mb-6">Политика конфиденциальности</h1>
              <p className="text-muted-foreground mb-8">Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>

              <div className="prose prose-slate max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей 
                    портала недвижимости. Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Собираемые данные</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Мы можем собирать следующие категории персональных данных:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Имя, фамилия и отчество</li>
                    <li>Адрес электронной почты</li>
                    <li>Номер телефона</li>
                    <li>Информация об объектах недвижимости</li>
                    <li>Данные о взаимодействии с сайтом</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Мы используем ваши персональные данные для:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Предоставления доступа к функционалу платформы</li>
                    <li>Размещения и управления объявлениями</li>
                    <li>Связи с вами по вопросам, связанным с сервисом</li>
                    <li>Улучшения качества наших услуг</li>
                    <li>Отправки уведомлений и новостей (с вашего согласия)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы применяем современные технические и организационные меры для защиты ваших персональных данных 
                    от несанкционированного доступа, изменения, раскрытия или уничтожения. Все данные передаются по 
                    защищенному протоколу HTTPS и хранятся на защищенных серверах.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Ваши права</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    В соответствии с законодательством, вы имеете право:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Получать информацию о ваших персональных данных</li>
                    <li>Требовать исправления неточных данных</li>
                    <li>Требовать удаления ваших данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                    <li>Ограничить обработку ваших данных</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Контактная информация</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    По вопросам, связанным с обработкой персональных данных, вы можете обращаться по адресу 
                    электронной почты: privacy@example.com
                  </p>
                </section>
              </div>

              <div className="mt-12 pt-8 border-t">
                <Link to="/">
                  <Button>Вернуться на главную</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
