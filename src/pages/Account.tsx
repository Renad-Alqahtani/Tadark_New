import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { 
  User, 
  Bell, 
  Languages, 
  Shield, 
  Moon, 
  HelpCircle, 
  Mail, 
  Lock,
  ChevronRight,
  Headphones,
  MessageSquare
} from 'lucide-react';

const Account = () => {
  const navigate = useNavigate();

  const menuSections = [
    {
      items: [
        { icon: User, label: 'View profile information', path: '/profile' },
        { icon: Bell, label: 'Notification', path: '/notification-settings' },
        { icon: Languages, label: 'Language', value: 'English' },
      ],
    },
    {
      items: [
        { icon: Shield, label: 'Security', path: '/security' },
        { icon: Moon, label: 'Theme', value: 'Light mode' },
      ],
    },
    {
      items: [
        { icon: Headphones, label: 'Help & Support', path: '/help' },
        { icon: MessageSquare, label: 'Contact us', path: '/contact' },
        { icon: Lock, label: 'Privacy policy', path: '/privacy' },
      ],
    },
  ];

  return (
    <MobileLayout>
      {/* Profile Header section */}
      <div className="gradient-header pb-0">
        <div className="pt-10 pb-6 flex flex-col items-center relative">
          
          {/* Avatar Container */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-card border-4 border-card flex items-center justify-center overflow-hidden shadow-lg">
              {/* عرض الصورة الشخصية الجديدة */}
              <img 
                src="/13.jpg" 
                alt="Sara Ali" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Edit Button (Camera/Edit icon) */}
            <button className="absolute bottom-1 right-1 p-1.5 bg-card rounded-full border border-border shadow-sm">
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>

          {/* User Name */}
          <h2 className="text-xl font-bold text-foreground mt-4">Sara Ali</h2>
          
          {/* ملاحظة: تم حذف قسم الـ Badge (Quality Department) من هنا بناءً على طلبك */}
          
        </div>
      </div>

      {/* Settings Menu Sections */}
      <div className="bg-card -mt-4 rounded-t-3xl pt-6">
        <div className="px-5 py-4 space-y-4 animate-fade-in">
          {menuSections.map((section, sectionIdx) => (
            <div 
              key={sectionIdx}
              className="bg-secondary rounded-2xl overflow-hidden"
            >
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIdx}
                    onClick={() => item.path && navigate(item.path)}
                    className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors border-b border-border/30 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    {item.value ? (
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Account;