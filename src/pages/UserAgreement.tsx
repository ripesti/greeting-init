import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const UserAgreement = () => {
  return (
    <>
      <Helmet>
        <title>Пользовательское соглашение - Портал недвижимости</title>
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
              <h1 className="text-4xl font-bold mb-6">Пользовательское соглашение</h1>
              <p className="text-muted-foreground mb-8">Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>

              <div className="prose prose-slate max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Общие условия</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящее Пользовательское соглашение определяет условия использования портала недвижимости. 
                    Регистрируясь на сайте, вы соглашаетесь с условиями данного соглашения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Регистрация и аккаунт</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    При регистрации на платформе пользователь обязуется:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Предоставлять достоверную и актуальную информацию</li>
                    <li>Поддерживать безопасность своего пароля</li>
                    <li>Незамедлительно уведомлять о несанкционированном доступе</li>
                    <li>Нести ответственность за все действия, совершенные под вашим аккаунтом</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Размещение объявлений</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    При размещении объявлений запрещается:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Публиковать ложную или недостоверную информацию</li>
                    <li>Размещать объявления, нарушающие законодательство</li>
                    <li>Использовать чужие фотографии без разрешения</li>
                    <li>Дублировать объявления</li>
                    <li>Размещать контент оскорбительного характера</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Права и обязанности</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Администрация платформы оставляет за собой право удалять объявления и блокировать аккаунты 
                    пользователей, нарушающих условия соглашения, без предварительного уведомления. Мы не несем 
                    ответственности за содержание объявлений и за сделки, совершенные между пользователями.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Интеллектуальная собственность</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Все материалы сайта, включая дизайн, логотипы, текстовое содержание, являются собственностью 
                    платформы и защищены законодательством об авторских правах. Запрещается копирование и 
                    распространение материалов без письменного разрешения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Ограничение ответственности</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Платформа предоставляется "как есть". Мы не гарантируем бесперебойную работу сервиса и не 
                    несем ответственности за возможные убытки, связанные с использованием платформы. Пользователь 
                    самостоятельно несет ответственность за все сделки с недвижимостью.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Изменение условий</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы оставляем за собой право изменять условия настоящего соглашения в любое время. Продолжение 
                    использования платформы после внесения изменений означает ваше согласие с новыми условиями.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Контакты</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    По всем вопросам, связанным с пользовательским соглашением, обращайтесь по адресу: support@example.com
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

export default UserAgreement;
