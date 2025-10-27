import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PersonalDataConsent = () => {
  return (
    <>
      <Helmet>
        <title>Согласие на обработку персональных данных - Портал недвижимости</title>
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
              <h1 className="text-4xl font-bold mb-6">Согласие на обработку персональных данных</h1>
              <p className="text-muted-foreground mb-8">Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>

              <div className="prose prose-slate max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Предмет согласия</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящим я даю свое согласие на обработку моих персональных данных порталом недвижимости 
                    (далее - "Оператор") в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
                    "О персональных данных".
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Перечень персональных данных</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Я даю согласие на обработку следующих категорий персональных данных:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Фамилия, имя, отчество</li>
                    <li>Дата рождения</li>
                    <li>Контактный телефон</li>
                    <li>Адрес электронной почты</li>
                    <li>Почтовый адрес</li>
                    <li>Данные документов, удостоверяющих личность</li>
                    <li>Фотографии</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Цели обработки</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Персональные данные обрабатываются в целях:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Регистрации и авторизации на платформе</li>
                    <li>Размещения и управления объявлениями о недвижимости</li>
                    <li>Осуществления связи с пользователями</li>
                    <li>Предоставления услуг платформы</li>
                    <li>Направления информационных и рекламных материалов</li>
                    <li>Улучшения качества работы сервиса</li>
                    <li>Исполнения договорных обязательств</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Действия с персональными данными</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Я даю согласие на совершение с моими персональными данными следующих действий:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Сбор</li>
                    <li>Запись</li>
                    <li>Систематизация</li>
                    <li>Накопление</li>
                    <li>Хранение</li>
                    <li>Уточнение (обновление, изменение)</li>
                    <li>Извлечение</li>
                    <li>Использование</li>
                    <li>Передача (предоставление, доступ)</li>
                    <li>Обезличивание</li>
                    <li>Блокирование</li>
                    <li>Удаление</li>
                    <li>Уничтожение</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Способы обработки</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Обработка персональных данных осуществляется как с использованием средств автоматизации, 
                    так и без использования таких средств. Данные обрабатываются и хранятся на серверах Оператора 
                    с применением мер защиты от несанкционированного доступа.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Срок действия согласия</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящее согласие действует с момента его предоставления и до момента отзыва. Согласие может 
                    быть отозвано мною в любое время путем направления письменного заявления на адрес Оператора 
                    или через интерфейс личного кабинета на платформе.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Передача персональных данных третьим лицам</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Я даю согласие на передачу моих персональных данных третьим лицам в случаях, предусмотренных 
                    законодательством, а также партнерам платформы для целей оказания услуг. При этом Оператор 
                    обязуется обеспечить конфиденциальность данных и требовать того же от третьих лиц.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Контактные данные</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Для отзыва согласия на обработку персональных данных или получения дополнительной информации 
                    обращайтесь по адресу: privacy@example.com
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

export default PersonalDataConsent;
