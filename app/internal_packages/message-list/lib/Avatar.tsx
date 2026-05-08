import path from 'path';
import React from 'react';

interface AvatarProps extends React.ComponentProps<'div'> {
  name: string;
  email: string;
}

const configPath = AppEnv.getLoadSettings().resourcePath as string;

const ResourcePath = path.join(
  configPath.endsWith('app.asar') ? configPath + '.unpacked' : configPath,
  'static', 'avatars'
)



export function Avatar(_props: AvatarProps) {
  const { name = '无', email } = _props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const firstChar = name.charAt(0);
  const isNotCN = /^[a-zA-Z]$/.test(firstChar);
  const avatarName = isNotCN
    ? name.length >= 2 ? name.slice(0, 2) : name
    : firstChar;

  const avatarUrl = `${ResourcePath}\\${email}.png`

  const color = React.useMemo(() => avatarColor(email, name), [email, name])

  return (
    <div className='xmail-ui-avatar' style={!isLoaded ? {
      color: color,
      background: color + '33'
    } : {}}>
      <img className='ui-avatar-img' style={{ display: !isLoaded ? 'none' : 'inline', background: 'transparent' }}
        src={avatarUrl}
        onLoad={() => setIsLoaded(true)}
      />
      <span className='ui-avatar-text' style={{
        display: isLoaded ? 'none' : 'inline'
      }}>{avatarName}</span>
    </div>
  )
}

const AVATAR_COLORS = [
  '#4ECDC4', // 蓝绿色（Tiffany蓝感）
  '#FF6B6B', // 珊瑚红
  '#45B7D1', // 天蓝色
  '#96CEB4', // 浅茶绿
  '#FFEEAD', // 奶油黄 (需注意文字对比度)
  '#D4A5A5', // 玫瑰粉
  '#9B59B6', // 浅紫色
  '#3498DB', // 亮蓝色
  '#E67E22', // 亮橙色
  '#2ECC71'  // 翡翠绿
];

function avatarColor(email: string, name: string) {
  // 哈希算法：根据 email 生成固定颜色索引
  let hash = 0;
  const identifier = email || name; // 兜底防止 email 为空
  for (let i = 0; i < identifier.length; i++) {
    hash = identifier.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];

  return color;
}