import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('home');

  const programs = [
    {
      title: 'Основы военной подготовки',
      description: 'Изучение строевой подготовки, тактики и военного дела',
      icon: 'Shield',
      duration: '6 месяцев'
    },
    {
      title: 'Физическая подготовка',
      description: 'Развитие силы, выносливости и боевой готовности',
      icon: 'Dumbbell',
      duration: '12 месяцев'
    },
    {
      title: 'История и патриотизм',
      description: 'Изучение военной истории России и воспитание патриотизма',
      icon: 'BookOpen',
      duration: '9 месяцев'
    },
    {
      title: 'Стрелковая подготовка',
      description: 'Обучение обращению с оружием и стрельбе',
      icon: 'Target',
      duration: '4 месяца'
    }
  ];

  const events = [
    {
      date: '20 декабря 2025',
      title: 'День героев Отечества',
      type: 'Праздничное мероприятие'
    },
    {
      date: '25 декабря 2025',
      title: 'Военно-спортивные соревнования',
      type: 'Соревнование'
    },
    {
      date: '15 января 2026',
      title: 'Торжественная присяга',
      type: 'Церемония'
    }
  ];

  const achievements = [
    {
      title: '1 место на региональных соревнованиях',
      year: '2024',
      category: 'Строевая подготовка'
    },
    {
      title: 'Победа в военно-спортивной игре "Зарница"',
      year: '2024',
      category: 'Командные соревнования'
    },
    {
      title: 'Лучший центр патриотического воспитания региона',
      year: '2023',
      category: 'Образование'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '15:00-17:00', activity: 'Строевая подготовка' },
    { day: 'Вторник', time: '16:00-18:00', activity: 'Физическая подготовка' },
    { day: 'Среда', time: '15:00-17:00', activity: 'Стрелковая подготовка' },
    { day: 'Четверг', time: '16:00-18:00', activity: 'Военная история' },
    { day: 'Пятница', time: '15:00-17:00', activity: 'Тактическая подготовка' },
    { day: 'Суббота', time: '10:00-14:00', activity: 'Полевые занятия' }
  ];

  const news = [
    {
      date: '10 декабря 2024',
      title: 'Открытие нового тира для стрелковой подготовки',
      preview: 'В центре "Авангард" состоялось торжественное открытие современного стрелкового тира...'
    },
    {
      date: '5 декабря 2024',
      title: 'Наши кадеты заняли призовые места',
      preview: 'На областных соревнованиях по военно-прикладным видам спорта команда центра показала отличные результаты...'
    },
    {
      date: '1 декабря 2024',
      title: 'День открытых дверей прошёл успешно',
      preview: 'Более 150 родителей и будущих курсантов посетили наш центр и познакомились с программами обучения...'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/files/5301093269930445695.jpg',
      title: 'Стрелковая подготовка'
    },
    {
      url: 'https://cdn.poehali.dev/files/5211021891563359682.jpg',
      title: 'Строевая подготовка'
    },
    {
      url: 'https://cdn.poehali.dev/files/5260384216984260473.jpg',
      title: 'Радиационная защита'
    },
    {
      url: 'https://cdn.poehali.dev/files/5192832666406350556.jpg',
      title: 'Тактические занятия'
    },
    {
      url: 'https://cdn.poehali.dev/files/5192832666406350553.jpg',
      title: 'Обучение курсантов'
    },
    {
      url: 'https://cdn.poehali.dev/files/5280532144792998321.jpg',
      title: 'Теоретическая подготовка'
    },
    {
      url: 'https://cdn.poehali.dev/files/5192832666406350554.jpg',
      title: 'Групповые занятия'
    },
    {
      url: 'https://cdn.poehali.dev/files/5211021891563359680.jpg',
      title: 'Обучение стрельбе'
    },
    {
      url: 'https://cdn.poehali.dev/files/5260384216984260467.jpg',
      title: 'Зимние учения'
    },
    {
      url: 'https://cdn.poehali.dev/files/5192832666406350555.jpg',
      title: 'Командная работа'
    },
    {
      url: 'https://cdn.poehali.dev/files/5211021891563359681.jpg',
      title: 'Тактическая подготовка'
    },
    {
      url: 'https://cdn.poehali.dev/files/5197386852158538499.jpg',
      title: 'Строевые упражнения'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-primary text-primary-foreground z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://cdn.poehali.dev/files/ЗАСТАВКА.jpg" alt="Авангард" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold">Авангард</h1>
                <p className="text-xs opacity-90">Военно-патриотический центр</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О центре</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-accent transition-colors">Программы</button>
              <button onClick={() => scrollToSection('events')} className="hover:text-accent transition-colors">Мероприятия</button>
              <button onClick={() => scrollToSection('achievements')} className="hover:text-accent transition-colors">Достижения</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-accent transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('news')} className="hover:text-accent transition-colors">Новости</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img 
            src="https://cdn.poehali.dev/files/5211021891563359682.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Обособленное подразделение</Badge>
            <h1 className="text-6xl font-black mb-6">Военно-патриотический центр "Авангард"</h1>
            <p className="text-xl mb-8 opacity-90">
              Воспитываем патриотов, готовых служить Родине. Формируем характер, дисциплину и готовность защищать свою страну.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Записаться
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <img 
                src="https://cdn.poehali.dev/files/5301093269930445695.jpg" 
                alt="Стрелковая подготовка" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Стрелковая подготовка</h3>
                  <p className="text-sm opacity-90">Обучение обращению с оружием</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <img 
                src="https://cdn.poehali.dev/files/5260384216984260473.jpg" 
                alt="Радиационная защита" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Специальная подготовка</h3>
                  <p className="text-sm opacity-90">Радиационная и химическая защита</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <img 
                src="https://cdn.poehali.dev/files/5211021891563359682.jpg" 
                alt="Строевая подготовка" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Строевая подготовка</h3>
                  <p className="text-sm opacity-90">Командная работа и дисциплина</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">О центре "Авангард"</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Военно-патриотический центр "Авангард" - обособленное подразделение, специализирующееся на патриотическом воспитании молодёжи и подготовке будущих защитников Отечества.
              </p>
              <p className="text-lg">
                Наша миссия - формирование у молодого поколения высокого патриотического сознания, готовности к выполнению гражданского долга и конституционных обязанностей по защите интересов Родины.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Выпускников</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет работы</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Программ</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/5301093269930445695.jpg" 
                alt="О центре" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Программы обучения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{program.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Мероприятия</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-secondary">
                <CardHeader>
                  <Badge className="w-fit mb-2">{event.type}</Badge>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {event.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Расписание занятий</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Clock" size={24} />
                Еженедельное расписание
              </h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/20 pb-3">
                    <div>
                      <div className="font-semibold">{item.day}</div>
                      <div className="text-sm opacity-80">{item.activity}</div>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">{item.time}</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="CalendarDays" size={24} />
                Календарь мероприятий
              </h3>
              <div className="bg-white rounded-lg p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Достижения</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.category}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" size={24} className="text-accent" />
                      <span className="text-2xl font-bold text-accent">{achievement.year}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg h-64">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-white font-semibold p-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Новости центра</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-lg mb-3">{item.title}</CardTitle>
                  <CardDescription>{item.preview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="opacity-90">г. Москва, ул. Патриотов, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="opacity-90">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="opacity-90">info@avangard-center.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                  <p className="opacity-90">Пн-Сб: 9:00 - 20:00</p>
                  <p className="opacity-90">Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-foreground">Записаться на занятия</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Имя</label>
                    <input type="text" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="Введите имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <input type="tel" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 border rounded-md" placeholder="email@example.com" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Shield" size={28} />
            <span className="text-xl font-bold">Авангард</span>
          </div>
          <p className="text-sm opacity-80">© 2024 Военно-патриотический центр "Авангард". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;