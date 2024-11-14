'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, Phone, Mail, Wallet, Twitter, Youtube } from 'lucide-react'

export default function InfoCard() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const topRowInfo = [
    { icon: Globe, label: 'Website', value: 'https://example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
  ]

  const bottomRowInfo = [
    {
      icon: Wallet,
      label: 'ETH Address',
      value: '0x1234567890123456789012345678901234567890',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: 'https://twitter.com/yourusername',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'https://youtube.com/c/yourchannel',
    },
  ]

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label)
      setTimeout(() => setCopiedText(null), 2000)
    })
  }

  const truncateEthAddress = (address: string) => {
    if (address.length <= 13) return address
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength - 3)}...`
  }

  const renderInfoRow = (infoArray: typeof topRowInfo) => (
    <div className="-mx-1 flex flex-wrap items-center justify-between">
      {infoArray.map(({ icon: Icon, label, value }) => (
        <Button
          key={label}
          variant="outline"
          className="m-1 flex h-auto min-w-[120px] flex-1 items-center justify-start space-x-2 px-3 py-2"
          onClick={() => copyToClipboard(value, label)}
        >
          <Icon className="h-4 w-4 flex-shrink-0" />
          <div className="flex flex-col items-start overflow-hidden">
            <span className="text-xs font-medium">{label}</span>
            <span className="w-full truncate text-xs text-muted-foreground">
              {label === 'ETH Address'
                ? truncateEthAddress(value)
                : truncateText(value, 25)}
            </span>
          </div>
        </Button>
      ))}
    </div>
  )

  return (
    <Card className="w-full">
      <CardContent className="space-y-2 p-2">
        {renderInfoRow(topRowInfo)}
        {renderInfoRow(bottomRowInfo)}
      </CardContent>
      {copiedText && (
        <div className="animate-fade-in-out fixed bottom-4 right-4 rounded-md bg-green-500 px-4 py-2 text-white shadow-lg">
          Copied {copiedText}!
        </div>
      )}
    </Card>
  )
}
